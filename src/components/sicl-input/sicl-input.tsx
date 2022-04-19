import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'sicl-input',
  styleUrl: 'sicl-input.scss',
  shadow: true,
})
export class SiclInput {
  @Prop() inputType: 'text' | 'password' = 'text';
  @Prop() inputId: string;
  @Prop() labelText: string;
  @Prop() value: string | number | string[];
  @Prop() name: any;
  @Prop() required: boolean;
  @Prop() minLength: number;
  @Prop() maxLength: number;
  @Prop() placeholder: any;
  @Prop() disabled: boolean;
  @Prop() iconLeft: string;
  @Prop() iconRight: string;

  // handleInput: (event: Event) => void;
  // handleChange: (event: Event) => void;
  // handleFocus: (event: FocusEvent) => void;

  @State() hasFocus: boolean = false;

  render() {
    return (
      <Host>
        <label class="input__label" htmlFor={this.inputId}>
          {this.labelText}
        </label>
        <label class="input__wrapper">
          {this.iconLeft && <sicl-icon class="input__icon-left" name={this.iconLeft} size={'20px'}></sicl-icon>}
          <input
            type="text"
            class="input__field"
            value={this.value}
            {...(!!this.name ? { name: this.name } : {})}
            required={this.required}
            minLength={this.minLength}
            maxLength={this.maxLength}
            id={this.inputId}
            // onInput={this.handleInput}
            // onChange={this.handleChange}
            // onFocus={this.handleFocus}
            {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
            disabled={this.disabled}
          />
          {this.iconRight && <sicl-icon class="input__icon-right" name={this.iconRight} size={'20px'}></sicl-icon>}
        </label>
      </Host>
    );
  }
}
