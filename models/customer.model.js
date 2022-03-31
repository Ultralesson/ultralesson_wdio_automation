const { AddressBuilder } = require('./address.model');
const { CardDetailsBuilder } = require('./cardDetails.model');
const { faker } = require('@faker-js/faker');

class Customer {
    constructor(shippingAddress, paymentMode, cardDetails, billingAddress) {
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.shippingAddress = shippingAddress;
        this.paymentMode = paymentMode;
        this.cardDetails = cardDetails;
        this.billingAddress = billingAddress;
    }
}

let CustomerBuilder = function () {

    let email;
    let password;
    let firstName;
    let lastName;
    let shippingAddress;
    let paymentMode;
    let cardDetails;
    let billingAddress;

    return {
        setFirstName: function (firstName) {
            this.firstName = firstName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
            return this;
        },
        setEmail: function (email) {
            this.email = email;
            return this;
        },
        setPassword: function (password) {
            this.password = password;
            return this;
        },
        setShippingAddress: function () {
            this.shippingAddress = new AddressBuilder()
                .setFirstName(firstName)
                .setLastName(lastName)
                .setDoorNo(faker.address.streetPrefix())
                .setStreet(faker.address.streetAddress())
                .setCity(faker.address.cityName())
                .setState(faker.address.state())
                .setPincode(faker.address.zipCode());
            return this;
        },
        setPaymentMode: function (paymentMode) {
            this.paymentMode = paymentMode;
            return this;
        },
        setCardDetails: function () {
            this.cardDetails = new CardDetailsBuilder()
                .setNumber(faker.finance.creditCardNumber)
                .setName(faker.name.findName())
                .setExpiry('09/25')
                .setCVV(faker.finance.creditCardCVV());
            return this;
        },
        setBillingAddress: function () {
            this.billingAddress = new AddressBuilder()
                .setFirstName(firstName)
                .setLastName(lastName)
                .setDoorNo(faker.address.streetPrefix())
                .setStreet(faker.address.streetAddress())
                .setCity(faker.address.cityName())
                .setState(faker.address.state())
                .setPincode(faker.address.zipCode());
        return this;
            return this;
        },
        build: function () {
            return new Customer(email, password, firstName, lastName, shippingAddress, paymentMode, cardDetails, billingAddress);
        }
    };
};

module.exports = {
    CustomerBuilder
};