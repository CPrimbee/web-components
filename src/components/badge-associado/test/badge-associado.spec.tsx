import { newSpecPage } from '@stencil/core/testing';
import { BadgeAssociado } from '../badge-associado';

describe('badge-associado', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BadgeAssociado],
      html: `<badge-associado></badge-associado>`,
    });
    expect(page.root).toEqualHtml(`
      <badge-associado>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </badge-associado>
    `);
  });
});
