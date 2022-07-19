import { Component, Element, Host, h, Prop, Watch, EventEmitter, Event, Listen, VNode } from '@stencil/core';

@Component({
  tag: 'sicl-radio-group',
  styleUrl: 'sicl-radio-group.scss',
  shadow: true,
})
export class SiclRadioGroup {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) disabled = false;

  @Watch('disabled')
  onDisableChange(): void {
    this.passPropsToRadioButtons();
  }

  @Prop({ reflect: true }) name!: string;
  @Prop({ reflect: true }) labelText!: string;
  @Prop({ reflect: true }) required = false;

  mutationObserver: MutationObserver;

  connectedCallback(): void {
    this.passPropsToRadioButtons();
    this.mutationObserver?.observe(this.el, { childList: true, subtree: true });
  }

  disconnectedCallback(): void {
    this.mutationObserver?.disconnect();
  }

  passPropsToRadioButtons(): void {
    const radioButtons = this.el.querySelectorAll('sicl-radio');
    if (radioButtons.length > 0) {
      radioButtons.forEach(radioButton => {
        radioButton.disabled = this.disabled || radioButton.disabled;
        radioButton.name = this.name;
        radioButton.required = this.required;
      });
    }
  }

  @Event() siclRadioGroupChange: EventEmitter;

  @Listen('siclRadioChange')
  radioChangeHandler(event: CustomEvent): void {
    this.siclRadioGroupChange.emit((event.target as HTMLSiclRadioElement).value);
  }

  render(): VNode {
    return (
      <Host role="radiogroup">
        <label class="radiogroup__label">
          {this.labelText}
        </label>
        <slot></slot>
      </Host>
    );
  }
}
