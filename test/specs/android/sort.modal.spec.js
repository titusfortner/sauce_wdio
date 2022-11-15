describe('SortModal', () => {
    beforeEach(async () => {
    });

    it('should prompt the sort modal when I click the sort button', async () => {
        const sortButtonLocator = '//*[@content-desc="sort button"]'
        await $(sortButtonLocator).click();

        const sortModalLocator = '//*[@content-desc="active option"]'
        await expect($(sortModalLocator)).toBeDisplayed();
    });
});
