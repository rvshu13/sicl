import { newE2EPage } from '@stencil/core/testing';

describe('sicl-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-checkbox-group></sicl-checkbox-group>');

    const element = await page.find('sicl-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
