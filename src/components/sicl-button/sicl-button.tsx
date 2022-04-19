import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-button',
  styleUrl: 'sicl-button.scss',
  shadow: true,
})
export class SiclButton {
  @Prop() type: string;
  @Prop() btn: 'primary' | 'secondary' | 'tertiary' | 'warning' = 'primary';
  @Prop() disabled: boolean;
  @Prop() iconLeft?: string;
  @Prop() iconRight?: string;

  render() {
    return (
      <button class={`btn ${this.btn}`} disabled={this.disabled} type={this.type}>
        {this.iconLeft && <sicl-icon name={this.iconLeft} size={'20px'}></sicl-icon>}
        <slot />
        {this.iconRight && <sicl-icon name={this.iconRight} size={'20px'}></sicl-icon>}
      </button>
    );
  }
}
