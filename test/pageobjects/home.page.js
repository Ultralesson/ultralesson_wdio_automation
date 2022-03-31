const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {

    selectors = {
        searchIcon: 'summary .icon-search',
        searchBarTextArea: '#Search-In-Modal',
        productName: '.predictive-search__item-heading'
    }

    async search(searchTerm) {
        await $(this.selectors.searchIcon).click();
        await $(this.selectors.searchBarTextArea).setValue(searchTerm);
    }

    async getSearchItems() {
        let result = await $(this.selectors.productName);
        await result.waitForDisplayed({ timeout: 3000 });
        return await $$(this.selectors.productName);
    }
}
module.exports.HomePage = HomePage;