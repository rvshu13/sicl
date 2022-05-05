import { newSpecPage } from '@stencil/core/testing';
import { SiclToast } from '../sicl-toast';

describe('sicl-toast', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclToast],
      html: `<sicl-toast></sicl-toast>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-toast>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-toast>
    `);
  });
});
