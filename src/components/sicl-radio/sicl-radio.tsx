import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-radio',
  styleUrl: 'sicl-radio.scss',
  shadow: true,
})
export class SiclRadio {
  @Prop() inputId: string;
  @Prop() labelText: string;

  render() {
    return (
      <label class="radio__wrapper">
        <input class="radio__input" type="radio" id={this.inputId}></input>
        {this.labelText && <span class="radio__label">{this.labelText}</span>}
      </label>
    );
  }

}
