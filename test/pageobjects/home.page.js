const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    async search(searchTerm) {
        // await $('summary .icon-search').click();
        // await $('#Search-In-Modal').setValue(searchTerm);
    }

    async getSearchItems() {
        // et result = await $('.predictive-search__item-heading');
        // await result.waitForDisplayed({ timeout: 3000 });
        // return await $$('.predictive-search__item-heading');
        return [];
    }
}

module.exports = new HomePage();
