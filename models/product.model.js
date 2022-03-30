let Product = function (name, searchKeyword, price, brand, size, color, description, quantity) {
    this.name = name;
    this.searchKeyword = searchKeyword;
    this.price = price;
    this.brand = brand;
    this.size = size;
    this.color = color;
    this.description = description;
    this.quantity = quantity;
}

let ProductBuilder = function () {

    let name;
    let searchKeyword;
    let price;
    let brand;
    let size;
    let color;
    let description;
    let quantity;

    return {
        setName: function (name) {
            this.name = name;
            return this;
        },
        setSearchKeyworde: function (searchKeyword) {
            this.searchKeyword = searchKeyword;
            return this;
        },
        setPrice: function (price) {
            this.price = price;
            return this;
        },
        setBrand: function (brand) {
            this.brand = brand;
            return this;
        },
        setSize: function (size) {
            this.size = size;
            return this;
        },
        setColor: function (color) {
            this.color = color;
            return this;
        },
        setDescription: function (description) {
            this.description = description;
            return this;
        },
        setQuantity: function (quantity) {
            this.quantity = quantity;
            return this;
        },
        build: function () {
            return new Product(name, searchKeyword, price, brand, size, color, description, quantity);
        }
    };
};

module.exports = {
    ProductBuilder
  };