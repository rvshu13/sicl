import { newSpecPage } from '@stencil/core/testing';
import { SiclRadio } from '../sicl-radio';

describe('sicl-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclRadio],
      html: `<sicl-radio></sicl-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-radio>
    `);
  });
});
