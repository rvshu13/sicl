import { newE2EPage } from '@stencil/core/testing';

describe('sicl-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sicl-checkbox></sicl-checkbox>');

    const element = await page.find('sicl-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
