/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SiclButton {
        "class": 'primary' | 'secondary' | 'tertiary' | 'warning';
        "disabled": boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "name"?: string;
        "type": string;
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
    interface SiclIcon {
        "name": string;
        "size": string | '1em';
    }
    interface SiclInput {
        "disabled": boolean;
        "iconLeft": string;
        "iconRight": string;
        "inputId": string;
        "inputType": 'text' | 'password';
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
        "name": string;
        "required": boolean;
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
    interface HTMLElementTagNameMap {
        "sicl-button": HTMLSiclButtonElement;
        "sicl-checkbox": HTMLSiclCheckboxElement;
        "sicl-icon": HTMLSiclIconElement;
        "sicl-input": HTMLSiclInputElement;
        "sicl-radio": HTMLSiclRadioElement;
        "sicl-radio-group": HTMLSiclRadioGroupElement;
    }
}
declare namespace LocalJSX {
    interface SiclButton {
        "class"?: 'primary' | 'secondary' | 'tertiary' | 'warning';
        "disabled"?: boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "name"?: string;
        "type"?: string;
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
    interface SiclIcon {
        "name"?: string;
        "size"?: string | '1em';
    }
    interface SiclInput {
        "disabled"?: boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "inputId"?: string;
        "inputType"?: 'text' | 'password';
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
        "name": string;
        "onSiclRadioGroupChange"?: (event: CustomEvent<any>) => void;
        "required"?: boolean;
    }
    interface IntrinsicElements {
        "sicl-button": SiclButton;
        "sicl-checkbox": SiclCheckbox;
        "sicl-icon": SiclIcon;
        "sicl-input": SiclInput;
        "sicl-radio": SiclRadio;
        "sicl-radio-group": SiclRadioGroup;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "sicl-button": LocalJSX.SiclButton & JSXBase.HTMLAttributes<HTMLSiclButtonElement>;
            "sicl-checkbox": LocalJSX.SiclCheckbox & JSXBase.HTMLAttributes<HTMLSiclCheckboxElement>;
            "sicl-icon": LocalJSX.SiclIcon & JSXBase.HTMLAttributes<HTMLSiclIconElement>;
            "sicl-input": LocalJSX.SiclInput & JSXBase.HTMLAttributes<HTMLSiclInputElement>;
            "sicl-radio": LocalJSX.SiclRadio & JSXBase.HTMLAttributes<HTMLSiclRadioElement>;
            "sicl-radio-group": LocalJSX.SiclRadioGroup & JSXBase.HTMLAttributes<HTMLSiclRadioGroupElement>;
        }
    }
}
