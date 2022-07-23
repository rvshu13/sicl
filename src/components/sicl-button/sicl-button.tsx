import { Component, h, Host, Prop, Element } from '@stencil/core';

@Component({
  tag: 'sicl-button',
  styleUrl: 'sicl-button.scss',
  shadow: true,
})
export class SiclButton {
  @Element() el: HTMLSiclButtonElement;

  @Prop() type: string = 'button';
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'danger' = 'primary';
  @Prop() disabled: boolean = false;
  @Prop() name?: string;
  @Prop() iconLeft?: string;
  @Prop() iconRight?: string;

  formEl: HTMLFormElement;

  iconLeftEl = () => {
    if (this.iconLeft) {
      return <sicl-icon name={this.iconLeft} size={'20px'}></sicl-icon>;
    }
  }

  iconRightEl = () => {
    if (this.iconRight) {
      return <sicl-icon name={this.iconRight} size={'20px'}></sicl-icon>;
    }
  }    

  private handleClick = (): void => {
    const { formEl, type } = this;  

    // this.type refers to type attribute, not child element type
    if (type === "submit") {
      formEl?.requestSubmit();
    } else if (type === "reset") {
      formEl?.reset();
    }
  };

  render() {
    return (
      <Host>
        <button 
          class={`btn ${this.variant}`} 
          disabled={this.disabled} type={this.type}
          name={this.name}
          onClick={this.handleClick}
        >
          {this.iconLeftEl()}
          <slot />
          {this.iconRightEl()}
        </button>
      </Host>
    );
  }
}
