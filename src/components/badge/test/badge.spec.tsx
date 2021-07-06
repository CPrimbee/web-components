import { newSpecPage } from '@stencil/core/testing';
import { Badge } from '../badge';

describe('badge-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Badge],
      html: `<badge-icon></badge-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <badge-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </badge-icon>
    `);
  });
});
