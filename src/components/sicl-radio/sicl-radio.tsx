import { Component, Element, Event, EventEmitter, h, Method, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'sicl-radio',
  styleUrl: 'sicl-radio.scss',
  shadow: true,
})
export class SiclRadio {
  @Element() el: HTMLSiclRadioElement;
  @Prop({ reflect: true, mutable: true }) checked = false;

  @Watch("checked")
  checkedChanged(newChecked: boolean): void {
    if (newChecked) {
      this.uncheckOtherRadiosInGroup();
    }

    this.siclInternalRadioCheckedChange.emit(newChecked);
  }

  @Prop({ reflect: true }) required = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop() inputId: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true, mutable: true }) guid: string;
  @Prop() labelText?: string;
  
  rootNode: HTMLElement;

  /** @internal */
  @Event() siclInternalRadioCheckedChange: EventEmitter;
  @Event() siclRadioChange: EventEmitter;

  @Method()
  async emitCheckedChange(): Promise<void> {
    this.siclInternalRadioCheckedChange.emit();
  }

  private uncheckAllRadiosInGroup(): void {
    const radioButtons = this.queryRadios();
    radioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        radioButton.checked = false;
      }
    });
  }

  private uncheckOtherRadiosInGroup(): void {
    const Radios = this.queryRadios();
    const otherRadios = Radios.filter((Radio) => Radio.guid !== this.guid);
    otherRadios.forEach((otherRadio) => {
      if (otherRadio.checked) {
        otherRadio.checked = false;
      }
    });
  }

  queryRadios = (): HTMLSiclRadioElement[] => {
    return Array.from(this.rootNode.querySelectorAll("sicl-radio:not([hidden])")).filter(
      (radio: HTMLSiclRadioElement) => radio.name === this.name
    ) as HTMLSiclRadioElement[];
  };

  check = (): void => {
    if (this.disabled) {
      return;
    }
    this.uncheckAllRadiosInGroup();
    this.checked = true;
    this.siclRadioChange.emit();
  };

  private clickHandler = (): void => {
    this.check();
  };

  render() {
    return (
      <label class="radio__wrapper">
        <input 
          class="radio__input" 
          type="radio" 
          id={this.inputId} 
          onClick={this.clickHandler}
          checked={this.checked}
          disabled={this.disabled}
        ></input>
        {this.labelText && <span class="radio__label">{this.labelText}</span>}
      </label>
    );
  }
}
