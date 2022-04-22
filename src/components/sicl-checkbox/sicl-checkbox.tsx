import { Component, h, Prop } from '@stencil/core';
@Component({
  tag: 'sicl-checkbox',
  styleUrl: 'sicl-checkbox.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class SiclCheckbox {
  @Prop() inputId: string;
  @Prop() labelText: string;

  render() {
    return (
      <label class="checkbox__wrapper">
        <input class="checkbox__input" type="checkbox" id={this.inputId}></input>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect class="checkbox__box" x="1.5" y="1.5" width="21" height="21" rx="4" stroke-width="3" stroke="currentColor"/>
          <polyline class="checkbox__check" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline>
        </svg>
        {this.labelText && <span class="checkbox__label">{this.labelText}</span>}
      </label>
    );
  }
}
