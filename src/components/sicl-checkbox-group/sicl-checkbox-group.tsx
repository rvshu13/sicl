import { Component, Element, Host, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'sicl-checkbox-group',
  styleUrl: 'sicl-checkbox-group.scss',
  shadow: true,
})
export class SiclCheckboxGroup {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) value: string;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) name!: string;
  @Prop({ reflect: true }) labelText!: string;

  connectedCallback(): void {
    this.passPropsToCheckboxes();
  }

  passPropsToCheckboxes(): void {
    const checkboxes = this.el.querySelectorAll('sicl-checkbox');
    if (checkboxes.length > 0) {
      checkboxes.forEach( checkbox => {
        checkbox.disabled = this.disabled || checkbox.disabled;
        checkbox.name = this.name;
      });
    }
  }

  render(): VNode {
    return (
      <Host name={this.name} disabled={this.disabled}>
        <label class="checkboxgroup__label">
          {this.labelText}
        </label>
        <slot></slot>
      </Host>
    );
  }

}
