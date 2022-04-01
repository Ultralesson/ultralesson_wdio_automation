const { HomePage } = require('../../pageobjects/home.page');
const { CustomerBuilder } = require('../../../models/customer.model');
const { ProductBuilder } = require('../../../models/product.model');
const { faker } = require('@faker-js/faker');

describe('Product Purchase', () => {
    it('should allow new user to buy a product', async () => {
        const homePage = new HomePage();
        await homePage.open('/'); 
        //Arrange
        let newCustomer = new CustomerBuilder()
                        .setPaymentMode('DebitCard')
                        .setCardDetails()
                        .setShippingAddress()
                        .setBillingAddress();
        console.log(newCustomer);
        let productToBuy = new ProductBuilder()
                            .setName()
                            .setSearchKeyword()
                            .setPrice()
                            .setBrand()
                            .setSize()
                            .setColor()
                            .setDescription()
                            .setQuantity();

        //Act
        await homePage.search(productToBuy.getSearchKeyword())
        let productDetailsPage = await homePage.selectProduct(productToBuy.name());

        
        await productDetailsPage.selectSize(productToBuy.size());
        await productDetailsPage.selectColor(productToBuy.color());
        await productDetailsPage.selectQuantity(productToBuy.quantity());
        await productDetailsPage.updateAddtionalProductDetails(productToBuy);
        let cartQuickSummaryPage = await productDetailsPage.addToCart();;

        let productAddedToCart = await cartQuickSummaryPage.getItemAddedToCart();


        //Assert
        Assert.assertEquals(productAddedToCart.getName(), productToBuy.name());
        Assert.assertEquals(productAddedToCart.getSize(), productToBuy.size());
        Assert.assertEquals(productAddedToCart.getColor(), productToBuy.color());

        //Act
        let cartPage = await cartQuickSummaryPage.viewMyCart();
        let cartDetails = await cartPage.getCartDetails();
        let productsInCart = await cartDetails.getProductsInCart();

        //Assert
        Assert.assertEquals(1, productsInCart.size());
        let productInCart = productsInCart.get(0);
        Assert.assertEquals(productInCart.getName(), productToBuy.name());
        Assert.assertEquals(productInCart.getSize(), productToBuy.size());
        Assert.assertEquals(productInCart.getColor(), productToBuy.color());
        Assert.assertEquals(productInCart.getQuantity(), productToBuy.quantity());
        Assert.assertEquals(productInCart.getPrice(), productToBuy.price());

        //Act
        await cartPage.checkout();
        let createAccountPage = await new LoginPage().navigateToCreateAccountPage();
        await createAccountPage.createAccount(newCustomer);

        let informationPage = new InformationPage();
        await informationPage.fillShippingAddress(newCustomer.shippingAddress());
        let customerContactInformation = await informationPage.getContactInformation();
        let cartDetailsInInformationPage = await informationPage.getCartDetails();

        //Assert
        Assert.assertEquals(customerContactInformation.getFirstName(), newCustomer.firstName());
        Assert.assertEquals(customerContactInformation.getLastName(), newCustomer.lastName());
        Assert.assertEquals(customerContactInformation.getEmail(), newCustomer.email());

        Assert.assertEquals(cartDetailsInInformationPage.getSubTotal(), cartDetails.getSubTotal());
        Assert.assertEquals(cartDetailsInInformationPage.getCoupon(), cartDetails.getCoupon());
        Assert.assertEquals(cartDetailsInInformationPage.getCouponDiscount(),
            cartDetails.getCouponDiscount());
        Assert.assertEquals(cartDetailsInInformationPage.getTotal(), cartDetails.getTotal());


        //Act
        let shippingPage = await informationPage.continueToShipping();
        let cartDetailsInShippingPage = await shippingPage.getUpdatedCartDetails();

        //Assert
        Assert.assertEquals(cartDetailsInShippingPage.getTaxes(), "₹51.24");

        //Act
        let paymentPage = await shippingPage.continueToPayment();
        await paymentPage.enterCardDetails(newCustomer.cardDetails())
        let orderConfirmationPage = await paymentPage.payNow();
        let orderDetails = await orderConfirmationPage.getOrderDetails();

        //Assert
        Assert.assertFalse(orderDetails.getOrderId().isEmpty());
        Assert.assertEquals(orderDetails.getCustomerDetails(), newCustomer);
        Assert.assertEquals(orderDetails.getCartSummary(), cartDetailsInShippingPage);
      });
});
