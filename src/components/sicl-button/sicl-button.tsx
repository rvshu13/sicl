import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-button',
  styleUrl: 'sicl-button.scss',
  shadow: true,
})
export class SiclButton {
  @Prop() text: string;
  @Prop() type: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <button class={`btn ${this.type}`} disabled={this.disabled} type="button">
        {this.text}
      </button>
    );
  }

}
