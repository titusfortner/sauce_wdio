describe('SortModal', () => {
    beforeEach(async () => {
    });

    it('should prompt the sort modal when I click the sort button', async () => {
        const sortButtonLocator = 'id=sort button'
        await $(sortButtonLocator).click();

        const sortModalLocator = 'id=active option'
        await expect($(sortModalLocator)).toBeDisplayed();
    });
});
