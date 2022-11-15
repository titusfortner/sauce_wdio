describe('LoginGood', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
    });

    it('should be able to login with a standard user', async () => {
        await $('#user-name').addValue('standard_user');
        await $('#password').addValue('secret_sauce');
        await $('.btn_action').click();

        await expect(await browser.getUrl()).toEqual('https://www.saucedemo.com/inventory.html');
    });
});
