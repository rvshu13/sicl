import { newSpecPage } from '@stencil/core/testing';
import { SiclCheckboxGroup } from '../sicl-checkbox-group';

describe('sicl-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclCheckboxGroup],
      html: `<sicl-checkbox-group></sicl-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-checkbox-group>
    `);
  });
});
