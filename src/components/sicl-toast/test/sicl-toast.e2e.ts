import { newE2EPage } from '@stencil/core/testing';

describe('sicl-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-toast></sicl-toast>');

    const element = await page.find('sicl-toast');
    expect(element).toHaveClass('hydrated');
  });
});
