let CardDetails = function (number, name, expiry, cvv) {
    this.number = number;
    this.name = name;
    this.expiry = expiry;
    this.cvv = cvv;
}

let CardDetailsBuilder = function () {

    let number;
    let name;
    let expiry;
    let cvv;

    return {
        setNumber: function (number) {
            this.number = number;
            return this;
        },
        setName: function (name) {
            this.name = name;
            return this;
        },
        setExpiry: function (expiry) {
            this.expiry = expiry;
            return this;
        },
        setCVV: function (cvv) {
            this.cvv = cvv;
            return this;
        },
        build: function () {
            return new CardDetails(number, name, expiry, cvv);
        }
    };
};

module.exports = {
    CardDetailsBuilder
  };