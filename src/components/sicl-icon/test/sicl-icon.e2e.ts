import { newE2EPage } from '@stencil/core/testing';

describe('sicl-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-icon></sicl-icon>');

    const element = await page.find('sicl-icon');
    expect(element).toHaveClass('hydrated');
  });
});
