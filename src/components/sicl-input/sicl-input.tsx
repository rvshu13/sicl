import { Component, Element, Event, Host, h, Prop, State, Watch, EventEmitter } from '@stencil/core';
import { connectForm, disconnectForm, submitForm } from '../../utils/dom';
import { isValidNumber } from '../../utils/validation';

type SetValueOrigin = "initial" | "connected" | "user" | "reset" | "direct";
@Component({
  tag: 'sicl-input',
  styleUrl: 'sicl-input.scss',
  shadow: true,
})
export class SiclInput {
  @Element() el: HTMLSiclInputElement;
  @Prop({ reflect: true }) type: 'text' | 'password' | 'number' = 'text';
  @Prop() inputId: string;
  @Prop() labelText: string;
  @Prop({ mutable: true, reflect: true }) value: string;
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

  mutationObserver: MutationObserver;

  @Watch('value')
  valueWatcher(newValue: string, previousValue: string): void {
    if (!this.userChangedValue) {
      this.setValue({
        origin: 'direct',
        previousValue,
        value: newValue == null || newValue == '' ? '' : this.type === 'number' ? (isValidNumber(newValue) ? newValue : this.previousValue || '') : newValue,
      });
      this.warnAboutInvalidNumberValue(newValue);
    }
    this.userChangedValue = false;
  }

  @State() hasFocus: boolean = false;

  @Event({ cancelable: true }) siclInput: EventEmitter;
  @Event() siclInputChange: EventEmitter<void>;
  
  private previousValueOrigin: SetValueOrigin = "initial";
  private previousEmittedValue: string;
  private userChangedValue = false;
  private previousValue: string;

  private setPreviousValue = (newPreviousValue: string): void => {
    this.previousValue =
      this.type === "number"
        ? isValidNumber(newPreviousValue)
          ? newPreviousValue
          : ""
        : newPreviousValue;
  };

  private emitChangeIfUserModified = (): void => {
    if (this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue) {
      this.siclInputChange.emit();
    }
    this.previousEmittedValue = this.value;
  };

  private inputInputHandler = (nativeEvent: InputEvent): void => {
    if (this.disabled) {
      return;
    }
    this.setValue({
      nativeEvent,
      origin: "user",
      value: (nativeEvent.target as HTMLInputElement).value
    });
  };

  // TODO: Fix dynamic value
  private setValue = ({
    committing = false,
    nativeEvent,
    origin,
    previousValue,
    value
  }: {
    committing?: boolean;
    nativeEvent?: MouseEvent | KeyboardEvent | InputEvent;
    origin: SetValueOrigin;
    previousValue?: string;
    value: string;
  }): void => {
    const newValue =
      this.type === "number" && value && isValidNumber(this.previousValue)
          ? this.previousValue
          : "";
    this.setPreviousValue(previousValue || this.value);
    this.previousValueOrigin = origin;
    this.userChangedValue = origin === "user" && this.value !== newValue;
    this.value = newValue;

    if (nativeEvent) {
      const siclInputEvent = this.siclInput.emit({
        element: this.el,
        nativeEvent,
        value: this.value
      });

      if (siclInputEvent.defaultPrevented) {
        this.value = this.previousValue;
      } else if (committing) {
        this.emitChangeIfUserModified();
      }
    }
  };

  private warnAboutInvalidNumberValue(value: string): void {
    if (this.type === 'number' && value && !isValidNumber(value)) {
      console.warn(`The specified value "${value}" cannot be parsed, or is out of range.`);
    }
  }

  defaultValue: SiclInput['value'];
  formEl: HTMLFormElement;

  connectedCallback(): void {
    this.setPreviousValue(this.value);
    connectForm(this);
    this.mutationObserver?.observe(this.el, { childList: true });
  }

  disconnectedCallback(): void {
    disconnectForm(this);
    this.mutationObserver?.disconnect();
  }

  onFormReset(): void {
    console.log('valueBefore', this.value);

    this.setValue({
      origin: "reset",
      value: this.defaultValue
    });

    console.log('valueAfter', this.value);
  }

  keyDownHandler = (event: KeyboardEvent): void => {
    if (this.disabled) {
      return;
    }
    if (event.key === 'Escape') {
      this.value = '';
      event.preventDefault();
    }
    if (event.key === 'Enter' && !event.defaultPrevented) {
      submitForm(this);
    }
  };

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
            defaultValue={this.defaultValue}
            {...(!!this.name ? { name: this.name } : {})}
            required={this.required}
            enterKeyHint={this.el.enterKeyHint}
            inputMode={this.el.inputMode}
            min={this.min}
            max={this.max}
            minLength={this.minLength}
            maxLength={this.maxLength}
            onInput={this.inputInputHandler}
            step={this.step}
            id={this.inputId}
            {...(!!this.placeholder ? { placeholder: this.placeholder } : {})}
            value={this.value}
            disabled={this.disabled}
          />
          {this.iconRight && <sicl-icon class="input__icon-right" name={this.iconRight} size={'20px'}></sicl-icon>}
        </label>
      </Host>
    );
  }
}
