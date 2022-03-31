const validCustomers = require('../resources/testdata/customers/valid_customers.json');

module.exports = class CustomerDataClient {

    async getValidCustomerOfType(key) {
        return JSON.parse(validCustomers)[key];
    }
}