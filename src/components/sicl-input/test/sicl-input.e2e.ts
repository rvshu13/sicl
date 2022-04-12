import { newE2EPage } from '@stencil/core/testing';

describe('sicl-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-input></sicl-input>');

    const element = await page.find('sicl-input');
    expect(element).toHaveClass('hydrated');
  });
});
