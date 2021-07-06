import { newE2EPage } from '@stencil/core/testing';

describe('badge-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<badge-icon></badge-icon>');

    const element = await page.find('badge-icon');
    expect(element).toHaveClass('hydrated');
  });
});
