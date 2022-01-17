import { newE2EPage } from '@stencil/core/testing';

describe('sicl-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-button></sicl-button>');

    const element = await page.find('sicl-button');
    expect(element).toHaveClass('hydrated');
  });
});
