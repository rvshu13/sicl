import { newSpecPage } from '@stencil/core/testing';
import { SiclInput } from '../sicl-input';

describe('sicl-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclInput],
      html: `<sicl-input></sicl-input>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-input>
    `);
  });
});
