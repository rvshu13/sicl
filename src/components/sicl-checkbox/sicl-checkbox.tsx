import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
@Component({
  tag: 'sicl-checkbox',
  styleUrl: 'sicl-checkbox.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class SiclCheckbox {
  /**
   * @internal
   */
  @Prop({ reflect: true }) required = false;
  @Prop({ reflect: true, mutable: true }) checked = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop({ reflect: true, mutable: true }) indeterminate = false;
  @Prop() inputId: string;
  @Prop({ reflect: true }) name: string;
  @Prop() labelText?: string;

  @Event() siclCheckboxChange: EventEmitter;

  readonly checkSVG = (<polyline class="checkbox__check" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline>);
  readonly indeterminateSVG = (<rect class="checkbox__check" x="3" y="9" width="18" height="6" rx="3" />);

  getPath = (): Element => (this.indeterminate ? this.indeterminateSVG : this.checked ? this.checkSVG : '');

  toggle = (): void => {
    if (!this.disabled) {
      this.checked = !this.checked;
      this.indeterminate = false;
      this.siclCheckboxChange.emit();
    }
  };

  clickHandler = (): void => {
    this.toggle();
  };

  render() {
    return (
      <label class="checkbox__wrapper">
        <input 
          class="checkbox__input" 
          type="checkbox" id={this.inputId} 
          onClick={this.clickHandler}
          checked={this.checked}
          disabled={this.disabled}
        >  
        </input>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect class="checkbox__box" x="1.5" y="1.5" width="21" height="21" rx="4" stroke-width="3" stroke="currentColor" />
          {/* <polyline class="checkbox__check" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" points="20 6 9 17 4 12"></polyline> */}
          {this.getPath()}
        </svg>
        {this.labelText && <span class="checkbox__label">{this.labelText}</span>}
      </label>
    );
  }
}
