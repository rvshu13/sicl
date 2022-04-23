import { newE2EPage } from '@stencil/core/testing';

describe('sicl-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-radio></sicl-radio>');

    const element = await page.find('sicl-radio');
    expect(element).toHaveClass('hydrated');
  });
});
