import { test, expect } from '@playwright/test'

///AAA - Arrange, Act, Assert

test('deve consultar um pedido aprovado', async ({ page }) => {
  //Arrange
  await page.goto('http://localhost:5173/')
  await expect(page.getByTestId('hero-section').getByRole('heading')).toContainText('Velô Sprint')
  await page.getByRole('link', { name: 'Consultar Pedido' }).click()
  await expect(page.getByRole('heading')).toContainText('Consultar Pedido')

  //Act
  await page.getByRole('textbox', { name: 'Número do Pedido' }).fill('VLO-XAPMM6')
  await page.getByRole('button', { name: 'Buscar Pedido' }).click();

  //Assert
  // opção 1
  // const orderCode = page.locator('//p[text()="Pedido"]/..//p[text()="VLO-XAPMM6"]')
  // await expect(orderCode).toBeVisible()

  // opção 2
  const containerPedido = page.getByRole('paragraph')
                              .filter({hasText: /^Pedido$/})
                              .locator('..') // sobe para o elemento pai

  await expect(containerPedido).toContainText('VLO-XAPMM6', {timeout: 10000})
  await expect(page.getByText('APROVADO')).toBeVisible()
})