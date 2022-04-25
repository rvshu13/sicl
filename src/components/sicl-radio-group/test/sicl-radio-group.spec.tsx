import { newSpecPage } from '@stencil/core/testing';
import { SiclRadioGroup } from '../sicl-radio-group';

describe('sicl-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SiclRadioGroup],
      html: `<sicl-radio-group></sicl-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <sicl-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sicl-radio-group>
    `);
  });
});
