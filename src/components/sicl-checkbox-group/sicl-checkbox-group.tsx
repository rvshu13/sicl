import { Component, Element, Host, h, Prop, VNode } from '@stencil/core';

@Component({
  tag: 'sicl-checkbox-group',
  styleUrl: 'sicl-checkbox-group.scss',
  shadow: true,
})
export class SiclCheckboxGroup {
  @Element() el: HTMLElement;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true }) name!: string;
  @Prop({ reflect: true }) labelText!: string;

  render(): VNode {
    return (
      <Host role="checkboxgroup">
        <label class="checkboxgroup__label">
          {this.labelText}
        </label>
        <slot></slot>
      </Host>
    );
  }

}
