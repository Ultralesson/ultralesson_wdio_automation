const { AddressBuilder } = require('./address.model');
const { CardDetailsBuilder } = require('./cardDetails.model');

class Customer {
    constructor(email, password, firstName, lastName, shippingAddress, paymentMode, cardDetails, billingAddress) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
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
                .setDoorNo('145/4')
                .setStreet('Lane no 5')
                .setCity('Bangalore')
                .setState('Karnataka')
                .setPincode(560038);
            return this;
        },
        setPaymentMode: function (paymentMode) {
            this.paymentMode = paymentMode;
            return this;
        },
        setCardDetails: function () {
            this.cardDetails = new CardDetailsBuilder()
                .setNumber(9876123409871234)
                .setName(firstName + lastName)
                .setExpiry('09/25')
                .setCVV(382);
            return this;
        },
        setBillingAddress: function () {
            this.billingAddress = new AddressBuilder()
                .setFirstName(firstName)
                .setLastName(lastName)
                .setDoorNo('145/4')
                .setStreet('Lane no 5')
                .setCity('Bangalore')
                .setState('Karnataka')
                .setPincode(560038);
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