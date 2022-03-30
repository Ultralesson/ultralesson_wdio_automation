let Address = function (firstName, lastName, doorNo, street, city, state, pincode) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.doorNo = doorNo;
    this.street = street;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
}

let AddressBuilder = function () {

    let firstName;
    let lastName;
    let doorNo;
    let street;
    let city;
    let state;
    let pincode;

    return {
        setFirstName: function (firstName) {
            this.firstName = firstName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
            return this;
        },
        setDoorNo: function (doorNo) {
            this.doorNo = doorNo;
            return this;
        },
        setStreet: function (street) {
            this.street = street;
            return this;
        },
        setCity: function (city) {
            this.city = city;
            return this;
        },
        setState: function (state) {
            this.state = state;
            return this;
        },
        setPincode: function (pincode) {
            this.pincode = pincode;
            return this;
        },
        build: function () {
            return new Address(firstName, lastName, doorNo, street, city, state, pincode);
        }
    };
};

module.exports = {
    AddressBuilder
  };