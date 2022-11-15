describe('LoginBad', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
    });

    it('should not be able to login with a locked out user', async () => {
        await $('#user-name').addValue('locked_out_user');
        await $('#password').addValue('secret_sauce');
        await $('.btn_action').click();

        await expect(await $("[data-test='error']").isExisting()).toBeTruthy();
    });
});
