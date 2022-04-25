import { newE2EPage } from '@stencil/core/testing';

describe('sicl-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-radio-group></sicl-radio-group>');

    const element = await page.find('sicl-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
