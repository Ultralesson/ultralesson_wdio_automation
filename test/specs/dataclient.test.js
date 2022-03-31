const { CustomerDataClient } = require('../../dataclients/customer.dataclient');

describe('Validate data source', () => {
    it('Verify that customer with active items in cart is sourced correctly', async () => {
        const customerDataClient = new CustomerDataClient();
        const customerWithActiveItemsInCart = customerDataClient
                .getValidCustomerOfType("customerWithActiveItemsInCart");

        expect(customerWithActiveItemsInCart.getEmail()).toBe("abc@xyz.com");
        expect(customerWithActiveItemsInCart.getPassword()).toBe("abc1234");
    });

    it('Verify that customer with sprint sale coupon is sourced correctly', async () => {
        const customerDataClient = new CustomerDataClient();
        const customerWithActiveItemsInCart = customerDataClient
                .getValidCustomerOfType("customerWithSpringSaleCoupon");

        expect(customerWithActiveItemsInCart.getEmail()).toBe("def@ijk.com");
        expect(customerWithActiveItemsInCart.getPassword()).toBe("def1234");
    });
});