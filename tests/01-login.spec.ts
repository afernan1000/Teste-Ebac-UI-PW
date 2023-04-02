import { test, expect } from '@playwright/test';

test.describe('Funcionalidade Login', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://lojaebac.ebaconline.art.br/minha-conta/');
  });

  test('Deve fazer login com sucesso', async ({ page }) => {
    // FAZENDO LOGIN
    await page.fill('#username', 'aluno_ebac@teste.com');
    await page.fill('#password', 'teste@teste.com');
    await page.click('.woocommerce-form > .button');
    // VALIDAÇÃO
    expect(await page.innerText('.page-title')).toContain('MINHA CONTA');
    expect(await page.innerText('.woocommerce-MyAccount-content > :nth-child(2)')).toContain('Olá,');
  })

  test('Deve exibir uma mensagem de erro ao inserir usuário inválido', async ({ page }) => {
    // FAZENDO LOGIN
    await page.fill('#username', '_ebac@teste.com');
    await page.fill('#password', 'teste@teste.com');
    await page.click('.woocommerce-form > .button');
    // VALIDAÇÃO
    expect(await page.innerText('.woocommerce-error')).toContain('Endereço de e-mail desconhecido');
  })

  test.only('Deve exibir uma mensagem de erro ao inserir senha inválida', async ({ page }) => {
    // FAZENDO LOGIN
    await page.fill('#username', 'aluno_ebac@teste.com');
    await page.fill('#password', '@teste.com');
    await page.click('.woocommerce-form > .button');
    // VALIDAÇÃO
    expect(await page.innerText('.woocommerce-error')).toContain('está incorreta');
  })

})