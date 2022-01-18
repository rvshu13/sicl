import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sicl-button',
  styleUrl: 'sicl-button.scss',
  shadow: true,
})
export class SiclButton {
  @Prop() text: string;
  @Prop() icon: string;
  @Prop() iconPosition: 'left' | 'right' = 'left';
  @Prop() type: 'primary' | 'secondary' | 'tertiary' | 'warning' = 'primary';
  @Prop() disabled: boolean;

  render() {
    if (this.icon) {
      if (this.iconPosition === 'right') {
        return (
          <button class={`btn ${this.type}`} disabled={this.disabled} type="button">
            {this.text}
            <sicl-icon name={this.icon} size={'20px'}/>
          </button>
        );
      } else {
        return (
          <button class={`btn ${this.type}`} disabled={this.disabled} type="button">
            <sicl-icon name={this.icon} size={'20px'}/>
            {this.text}
          </button>
        );
      }
    } else {
      return (
        <button class={`btn ${this.type}`} disabled={this.disabled} type="button">
          {this.text}
        </button>
      );
    }
  }
}
