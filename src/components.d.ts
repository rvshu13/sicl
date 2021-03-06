/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SiclButton {
        "disabled": boolean;
        "form"?: string;
        "iconLeft"?: string;
        "iconRight"?: string;
        "name"?: string;
        "type": string;
        "variant": 'primary' | 'secondary' | 'tertiary' | 'danger';
    }
    interface SiclCheckbox {
        "checked": boolean;
        "disabled": boolean;
        "indeterminate": boolean;
        "inputId": string;
        "labelText"?: string;
        "name": string;
        "required": boolean;
    }
    interface SiclCheckboxGroup {
        "disabled": boolean;
        "labelText": string;
        "name": string;
    }
    interface SiclIcon {
        "name": string;
        "size": string | '1em';
    }
    interface SiclInput {
        "disabled": boolean;
        "iconLeft": string;
        "iconRight": string;
        "inputId": string;
        "inputType": 'text' | 'password' | "number";
        "labelText": string;
        "maxLength": number;
        "minLength": number;
        "name": any;
        "placeholder": any;
        "required": boolean;
        "value": string | number | string[];
    }
    interface SiclRadio {
        "checked": boolean;
        "disabled": boolean;
        "emitCheckedChange": () => Promise<void>;
        "guid": string;
        "inputId": string;
        "labelText"?: string;
        "name": string;
        "required": boolean;
        "value": string;
    }
    interface SiclRadioGroup {
        "disabled": boolean;
        "labelText": string;
        "name": string;
        "required": boolean;
    }
    interface SiclToast {
        "active": false;
        "dismissDuration": string;
        "label": string;
        "type": 'primary' | 'danger' | 'warning' | 'success';
    }
}
declare global {
    interface HTMLSiclButtonElement extends Components.SiclButton, HTMLStencilElement {
    }
    var HTMLSiclButtonElement: {
        prototype: HTMLSiclButtonElement;
        new (): HTMLSiclButtonElement;
    };
    interface HTMLSiclCheckboxElement extends Components.SiclCheckbox, HTMLStencilElement {
    }
    var HTMLSiclCheckboxElement: {
        prototype: HTMLSiclCheckboxElement;
        new (): HTMLSiclCheckboxElement;
    };
    interface HTMLSiclCheckboxGroupElement extends Components.SiclCheckboxGroup, HTMLStencilElement {
    }
    var HTMLSiclCheckboxGroupElement: {
        prototype: HTMLSiclCheckboxGroupElement;
        new (): HTMLSiclCheckboxGroupElement;
    };
    interface HTMLSiclIconElement extends Components.SiclIcon, HTMLStencilElement {
    }
    var HTMLSiclIconElement: {
        prototype: HTMLSiclIconElement;
        new (): HTMLSiclIconElement;
    };
    interface HTMLSiclInputElement extends Components.SiclInput, HTMLStencilElement {
    }
    var HTMLSiclInputElement: {
        prototype: HTMLSiclInputElement;
        new (): HTMLSiclInputElement;
    };
    interface HTMLSiclRadioElement extends Components.SiclRadio, HTMLStencilElement {
    }
    var HTMLSiclRadioElement: {
        prototype: HTMLSiclRadioElement;
        new (): HTMLSiclRadioElement;
    };
    interface HTMLSiclRadioGroupElement extends Components.SiclRadioGroup, HTMLStencilElement {
    }
    var HTMLSiclRadioGroupElement: {
        prototype: HTMLSiclRadioGroupElement;
        new (): HTMLSiclRadioGroupElement;
    };
    interface HTMLSiclToastElement extends Components.SiclToast, HTMLStencilElement {
    }
    var HTMLSiclToastElement: {
        prototype: HTMLSiclToastElement;
        new (): HTMLSiclToastElement;
    };
    interface HTMLElementTagNameMap {
        "sicl-button": HTMLSiclButtonElement;
        "sicl-checkbox": HTMLSiclCheckboxElement;
        "sicl-checkbox-group": HTMLSiclCheckboxGroupElement;
        "sicl-icon": HTMLSiclIconElement;
        "sicl-input": HTMLSiclInputElement;
        "sicl-radio": HTMLSiclRadioElement;
        "sicl-radio-group": HTMLSiclRadioGroupElement;
        "sicl-toast": HTMLSiclToastElement;
    }
}
declare namespace LocalJSX {
    interface SiclButton {
        "disabled"?: boolean;
        "form"?: string;
        "iconLeft"?: string;
        "iconRight"?: string;
        "name"?: string;
        "type"?: string;
        "variant"?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    }
    interface SiclCheckbox {
        "checked"?: boolean;
        "disabled"?: boolean;
        "indeterminate"?: boolean;
        "inputId"?: string;
        "labelText"?: string;
        "name"?: string;
        "onSiclCheckboxChange"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
    }
    interface SiclCheckboxGroup {
        "disabled"?: boolean;
        "labelText": string;
        "name": string;
    }
    interface SiclIcon {
        "name"?: string;
        "size"?: string | '1em';
    }
    interface SiclInput {
        "disabled"?: boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "inputId"?: string;
        "inputType"?: 'text' | 'password' | "number";
        "labelText"?: string;
        "maxLength"?: number;
        "minLength"?: number;
        "name"?: any;
        "placeholder"?: any;
        "required"?: boolean;
        "value"?: string | number | string[];
    }
    interface SiclRadio {
        "checked"?: boolean;
        "disabled"?: boolean;
        "guid"?: string;
        "inputId"?: string;
        "labelText"?: string;
        "name"?: string;
        "onSiclInternalRadioCheckedChange"?: (event: CustomEvent<any>) => void;
        "onSiclRadioChange"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
        "value"?: string;
    }
    interface SiclRadioGroup {
        "disabled"?: boolean;
        "labelText": string;
        "name": string;
        "onSiclRadioGroupChange"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
    }
    interface SiclToast {
        "active"?: false;
        "dismissDuration"?: string;
        "label": string;
        "onSiclToastHide"?: (event: CustomEvent<any>) => void;
        "onSiclToastRegister"?: (event: CustomEvent<any>) => void;
        "onSiclToastShow"?: (event: CustomEvent<any>) => void;
        "onSiclToastSync"?: (event: CustomEvent<any>) => void;
        "type"?: 'primary' | 'danger' | 'warning' | 'success';
    }
    interface IntrinsicElements {
        "sicl-button": SiclButton;
        "sicl-checkbox": SiclCheckbox;
        "sicl-checkbox-group": SiclCheckboxGroup;
        "sicl-icon": SiclIcon;
        "sicl-input": SiclInput;
        "sicl-radio": SiclRadio;
        "sicl-radio-group": SiclRadioGroup;
        "sicl-toast": SiclToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sicl-button": LocalJSX.SiclButton & JSXBase.HTMLAttributes<HTMLSiclButtonElement>;
            "sicl-checkbox": LocalJSX.SiclCheckbox & JSXBase.HTMLAttributes<HTMLSiclCheckboxElement>;
            "sicl-checkbox-group": LocalJSX.SiclCheckboxGroup & JSXBase.HTMLAttributes<HTMLSiclCheckboxGroupElement>;
            "sicl-icon": LocalJSX.SiclIcon & JSXBase.HTMLAttributes<HTMLSiclIconElement>;
            "sicl-input": LocalJSX.SiclInput & JSXBase.HTMLAttributes<HTMLSiclInputElement>;
            "sicl-radio": LocalJSX.SiclRadio & JSXBase.HTMLAttributes<HTMLSiclRadioElement>;
            "sicl-radio-group": LocalJSX.SiclRadioGroup & JSXBase.HTMLAttributes<HTMLSiclRadioGroupElement>;
            "sicl-toast": LocalJSX.SiclToast & JSXBase.HTMLAttributes<HTMLSiclToastElement>;
        }
    }
}
