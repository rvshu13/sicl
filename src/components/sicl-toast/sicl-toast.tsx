import { Component, Element, Event, Host, h, Prop, Watch, State, EventEmitter, Listen } from '@stencil/core';

const DURATIONS = {
  slow: 14000,
  medium: 10000,
  fast: 6000
};

@Component({
  tag: 'sicl-toast',
  styleUrl: 'sicl-toast.scss',
  shadow: true,
})
export class SiclToast {
  @Element() el: HTMLSiclToastElement;
  @Prop({ reflect: true, mutable: true }) active: false;
  @Prop() type: 'primary' | 'danger' | 'warning' | 'success' = 'primary';
  @Prop() label!: string;
  @Prop({ reflect: true }) dismissDuration = "medium";

  @Watch("dismissDuration")
  updateDuration(): void {
    if (this.dismissTimeoutId) {
      window.clearTimeout(this.dismissTimeoutId);
      this.dismissTimeoutId = window.setTimeout(
        () => this.hideToast(),
        DURATIONS[this.dismissDuration] - (Date.now() - this.trackTimer)
      );
    }
  }

  @Watch("active")
  watchActive(): void {
    if (this.active && !this.queued) {
      this.siclToastRegister.emit();
    }
    if (!this.active) {
      this.queue = this.queue.filter((e) => e !== this.el);
      this.siclToastSync.emit({queue: this.queue});
    }
  }

  @Event() siclToastHide: EventEmitter;
  @Event() siclToastShow: EventEmitter;
  @Event() siclToastSync: EventEmitter;
  @Event() siclToastRegister: EventEmitter;

  @Listen("siclToastSync", { target: "window" })
  toastSync(event: CustomEvent): void {
    if (this.queue !== event.detail.queue) {
      this.queue = event.detail.queue;
    }
    this.queueLength = this.queue.length;
    this.determineActiveToast();
  }

  @Listen("siclToastRegister", { target: "window" })
  alertRegister(): void {
    if (this.active && !this.queue.includes(this.el as HTMLSiclToastElement)) {
      this.queued = true;
      this.queue.push(this.el as HTMLSiclToastElement);
    }
    this.siclToastSync.emit({ queue: this.queue });
    this.determineActiveToast();
  }

  @State() queue: HTMLSiclToastElement[] = [];
  @State() queueLength: number = 0;
  @State() queued: boolean = false;

  connectedCallback(): void {
    if (this.active && !this.queued) {
      this.siclToastRegister.emit();
    }
  }
  
  disconnectedCallback(): void {
    window.clearTimeout(this.dismissTimeoutId);
  }

  render() {
    return (
      <Host aria-hidden={!this.active.toString()}>
        <div class={`toast__wrapper ${this.type} ${this.queued}`}>
          <div class="toast__content">
            <slot name="message"></slot>
          </div>
        </div>
      </Host>
    );
  }

  private dismissTimeoutId: number = null;
  private queueTimeout: number;
  private trackTimer = Date.now();
  private activeTransitionProp = "opacity";

  private determineActiveToast(): void {
    if (this.queue?.[0] === this.el) {
      this.showToast();
      if (!this.dismissTimeoutId) {
        this.trackTimer = Date.now();
        this.dismissTimeoutId = window.setTimeout(
          () => this.hideToast(),
          DURATIONS[this.dismissTimeoutId]
        );
      }
    } else {
      return;
    }
  }

  private hideToast = (): void => {
    this.dismissTimeoutId = null;
    this.queued = false;
    this.active = false;
    this.queue = this.queue.filter((e) => e !== this.el);
    this.determineActiveToast();
    this.siclToastSync.emit({ queue: this.queue });
  };

  transitionEnd = (event: TransitionEvent): void => {
    if (event.propertyName === this.activeTransitionProp) {
      this.active
        ? this.siclToastShow.emit({
            el: this.el,
            queue: this.queue
          })
        : this.siclToastHide.emit({
            el: this.el,
            queue: this.queue
          });
    }
  };

  private showToast(): void {
    window.clearTimeout(this.queueTimeout);
    this.queueTimeout = window.setTimeout(() => (this.queued = false), 300);
  }
}
