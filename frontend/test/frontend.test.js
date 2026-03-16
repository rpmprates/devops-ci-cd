const { test, expect } = require('@playwright/test');

test('deve carregar tela de consulta', async ({ page }) => {

  await page.goto('/index.html');

  await expect(page.locator('h2')).toHaveText('Consultar Saldo');

});