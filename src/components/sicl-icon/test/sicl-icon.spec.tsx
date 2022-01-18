import { newSpecPage } from '@stencil/core/testing';
import { SiclIcon } from '../sicl-icon';

describe('sicl-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclIcon],
      html: `<sicl-icon></sicl-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-icon>
    `);
  });
});
