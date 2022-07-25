import { Component, Element, Host, h, Prop, State, Watch, EventEmitter } from '@stencil/core';
import { connectForm, disconnectForm, renderInputOutsideShadowRoot } from '../../utils/dom';

@Component({
  tag: 'sicl-input',
  styleUrl: 'sicl-input.scss',
  shadow: true,
})
export class SiclInput {
  @Element() el!: HTMLSiclInputElement;

  @State() value: any | null = "";

  @Prop({ reflect: true }) type: 'text' | 'password' | 'number' = 'text';
  @Prop() inputId: string;
  @Prop() labelText: string;
  @Prop({ reflect: true }) name: any;
  @Prop({ reflect: true }) required: boolean;
  @Prop({ reflect: true }) min: number;
  @Prop({ reflect: true }) max: number;
  @Prop({ reflect: true }) minLength: number;
  @Prop({ reflect: true }) maxLength: number;
  @Prop() placeholder: any;
  @Prop({ reflect: true }) step?: number | 'any';
  @Prop({ reflect: true }) disabled: boolean;
  @Prop({ reflect: true }) iconLeft: string;
  @Prop({ reflect: true }) iconRight: string;
  @Prop({ reflect: true }) formAssociated: boolean;

  formEl: HTMLFormElement;
  defaultValue = SiclInput['value'];

  handleChange(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.valueChanged(this.value);
  }

  onFormReset(): void {
    console.log('BEFORE this.value', this.value);
    this.updateInputHidden(this.defaultValue);
    this.value = this.defaultValue;
    console.log('AFTER this.value', this.value);
  }

  connectedCallback(): void {
    connectForm(this);
  }

  disconnectedCallback(): void {
    disconnectForm(this);
  }

  componentDidLoad(): void {
    if (this.formAssociated) {
      const input = document.createElement('input');
      input.name = this.name;
      input.id = this.name;
      input.value = this.value;
      input.type = 'hidden';
      this.el.appendChild(input);
    }
  }

  private updateInputHidden(value: string = this.value): void {
    if (this.formAssociated) {
      (this.el.querySelector(`input[name=${this.name}]`) as HTMLInputElement).value = value;
    }
  }

  @Watch('value')
  valueChanged(newValue: string) {
    this.updateInputHidden(newValue);
  }

  render() {
    return (
      <Host>
        <label class="input__label" htmlFor={this.inputId}>
          {this.labelText}
        </label>
        <label class="input__wrapper">
          {this.iconLeft && <sicl-icon class="input__icon-left" name={this.iconLeft} size={'20px'}></sicl-icon>}
          <input
            type={this.type}
            class="input__field"
            {...(!!this.name ? { name: this.name } : {})}
            required={this.required}
            enterKeyHint={this.el.enterKeyHint}
            inputMode={this.el.inputMode}
            min={this.min}
            max={this.max}
            minLength={this.minLength}
            maxLength={this.maxLength}
            step={this.step}
            id={this.inputId}
            {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
            value={this.value}
            disabled={this.disabled}
            onInput={(event) => this.handleChange(event)}
          />
          {this.iconRight && <sicl-icon class="input__icon-right" name={this.iconRight} size={'20px'}></sicl-icon>}
        </label>
      </Host>
    );
  }
}
