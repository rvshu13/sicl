import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-checkbox',
  styleUrl: 'sicl-checkbox.scss',
  shadow: true,
})
export class SiclCheckbox {
  @Prop() inputId: string;
  @Prop() labelText: string;

  render() {
    return (
      <Host>
        <input class="input__checkbox" type="checkbox" id={this.inputId}></input>  
        {this.labelText && <label class="input__label" htmlFor={this.inputId}>{this.labelText}</label>}
      </Host>
    );
  }

}
