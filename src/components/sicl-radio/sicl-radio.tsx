import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, Watch } from '@stencil/core';
import { connectForm, disconnectForm } from '../../utils/dom';

@Component({
  tag: 'sicl-radio',
  styleUrl: 'sicl-radio.scss',
  shadow: true,
})
export class SiclRadio {
  @Element() el: HTMLSiclRadioElement;
  @Prop({ reflect: true, mutable: true }) checked = false;

  @Watch('checked')
  checkedChanged(newChecked: boolean): void {
    if (newChecked) {
      this.uncheckOtherRadiosInGroup();
    }

    this.siclInternalRadioCheckedChange.emit(newChecked);
  }

  @Prop({ reflect: true }) required = false;
  @Prop({ reflect: true }) disabled = false;
  @Prop() inputId: string;
  @Prop() value: string;
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true }) formAssociated: boolean;

  @Watch('name')
  nameChanged(): void {
    this.checkLastRadio();
  }

  @Prop({ reflect: true, mutable: true }) guid: string;
  @Prop() labelText?: string;

  rootNode: HTMLElement;

  /** @internal */
  @Event() siclInternalRadioCheckedChange: EventEmitter;
  @Event() siclRadioChange: EventEmitter;

  formEl: HTMLFormElement;
  defaultChecked: boolean;
  defaultValue: SiclRadio['value'];

  private checkLastRadio(): void {
    const radios = this.queryRadios();
    const checkedRadios = radios.filter(radioButton => radioButton.checked);

    if (checkedRadios?.length > 1) {
      const lastCheckedRadio = checkedRadios[checkedRadios.length - 1];
      checkedRadios
        .filter(checkedRadio => checkedRadio !== lastCheckedRadio)
        .forEach((checkedRadio: HTMLSiclRadioElement) => {
          checkedRadio.checked = false;
          checkedRadio.emitCheckedChange();
        });
    }
  }

  /** @internal */
  @Method()
  async emitCheckedChange(): Promise<void> {
    this.siclInternalRadioCheckedChange.emit();
  }

  private uncheckAllRadiosInGroup(): void {
    const radioButtons = this.queryRadios();
    radioButtons.forEach(radioButton => {
      if (radioButton.checked) {
        radioButton.checked = false;
        this.setInputHidden(radioButton, false);
      }
    });
  }

  private uncheckOtherRadiosInGroup(): void {
    const Radios = this.queryRadios();
    const otherRadios = Radios.filter(Radio => Radio.guid !== this.guid);
    otherRadios.forEach(otherRadio => {
      if (otherRadio.checked) {
        otherRadio.checked = false;
        this.setInputHidden(otherRadio, false);
      }
    });
  }

  queryRadios = (): HTMLSiclRadioElement[] => {
    return Array.from(this.rootNode.querySelectorAll('sicl-radio:not([hidden])')).filter((radio: HTMLSiclRadioElement) => radio.name === this.name) as HTMLSiclRadioElement[];
  };

  check = (): void => {
    if (this.disabled) {
      return;
    }
    this.uncheckAllRadiosInGroup();
    this.checked = true;
    this.setInputHidden(this.el, true);
    this.siclRadioChange.emit();
  };

  private clickHandler = (): void => {
    this.check();
  };

  componentDidLoad(): void {
    if (this.formAssociated) {
      const input = document.createElement('input');
      input.name = this.name;
      input.id = this.name;
      input.value = this.value;
      input.type = 'checkbox';
      input.checked = this.checked;
      input.style.display = 'none';
      this.el.appendChild(input);
    }
  }

  connectedCallback(): void {
    this.rootNode = this.el.getRootNode() as HTMLElement;
    this.guid = this.el.id || `sicl-radio-${Math.random()}`;
    if (this.name) {
      this.checkLastRadio();
    }
    connectForm(this);
  }

  disconnectedCallback(): void {
    disconnectForm(this);
  }

  private setInputHidden(el: HTMLSiclRadioElement, checked: boolean = this.checked): void {
    if (this.formAssociated) {
      (el.querySelector(`input[name=${this.name}]`) as HTMLInputElement).checked = checked;
    }
  }

  render() {
    return (
      <Host>
        <label class="radio__wrapper">
          <input class="radio__input" type="radio" id={this.inputId} value={this.value} name={this.name} onClick={this.clickHandler} checked={this.checked} disabled={this.disabled}></input>
          {this.labelText && <span class="radio__label">{this.labelText}</span>}
        </label>
      </Host>
    );
  }
}
