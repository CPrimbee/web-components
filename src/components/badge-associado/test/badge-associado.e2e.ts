import { newE2EPage } from '@stencil/core/testing';

describe('badge-associado', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<badge-associado></badge-associado>');

    const element = await page.find('badge-associado');
    expect(element).toHaveClass('hydrated');
  });
});
