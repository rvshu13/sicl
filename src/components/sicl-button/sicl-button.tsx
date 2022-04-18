import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-button',
  styleUrl: 'sicl-button.scss',
  shadow: true,
})
export class SiclButton {
  @Prop() text: string;
  @Prop() iconLeft: string;
  @Prop() iconRight: string;
  @Prop() type: 'primary' | 'secondary' | 'tertiary' | 'warning' = 'primary';
  @Prop() disabled: boolean;

  render() {
    return (
      <button class={`btn ${this.type}`} disabled={this.disabled} type="button">
        {this.iconLeft.length > 0 && <sicl-icon name={this.iconLeft} size={'20px'}></sicl-icon>}
        <slot />
        {this.iconRight.length > 0 && <sicl-icon name={this.iconRight} size={'20px'}></sicl-icon>}
      </button>
    );
  }
}
