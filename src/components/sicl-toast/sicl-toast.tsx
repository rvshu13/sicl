import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sicl-toast',
  styleUrl: 'sicl-toast.scss',
  shadow: true,
})
export class SiclToast {
  render() {
    return (
      <Host>
        <div class="toast__wrapper">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
