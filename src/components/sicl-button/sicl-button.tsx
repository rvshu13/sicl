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
        {this.iconLeft && <sicl-icon name={this.iconLeft} size={'20px'} />}
        <slot />
        {this.iconRight && <sicl-icon name={this.iconRight} size={'20px'} />}
      </button>
    );
  }
}
