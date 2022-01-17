import { newSpecPage } from '@stencil/core/testing';
import { SiclButton } from '../sicl-button';

describe('sicl-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclButton],
      html: `<sicl-button></sicl-button>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-button>
    `);
  });
});
