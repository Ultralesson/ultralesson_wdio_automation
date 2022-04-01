const { HomePage } = require('../pageobjects/home.page');

describe('Search tests', () => {
    it('should show relevant results on search', async() => {
        //Arrange
        let searchItem = 'Jeans';
        let searchKey = 'Jean';
        //Since baseURL is already mentioned in wdio.conf.js, we will only use / to open the url
        const homePage = new HomePage();
        await homePage.open('/');
  
        //Act
        await homePage.search(searchItem);
        let searchItems = await homePage.getSearchItems();
        
        //Assert
        expect(searchItems.length).toBe(4);
        searchItems.forEach(async function(item) {
            let text = await item.getText();
            expect(text.includes(searchKey));
        });
    });
});
