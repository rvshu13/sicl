import { newSpecPage } from '@stencil/core/testing';
import { SiclCheckbox } from '../sicl-checkbox';

describe('sicl-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclCheckbox],
      html: `<sicl-checkbox></sicl-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-checkbox>
    `);
  });
});
