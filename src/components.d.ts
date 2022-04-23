/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface SiclButton {
        "btn": 'primary' | 'secondary' | 'tertiary' | 'warning';
        "disabled": boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "type": string;
    }
    interface SiclCheckbox {
        "inputId": string;
        "labelText": string;
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
        "inputId": string;
        "labelText": string;
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
    interface HTMLElementTagNameMap {
        "sicl-button": HTMLSiclButtonElement;
        "sicl-checkbox": HTMLSiclCheckboxElement;
        "sicl-icon": HTMLSiclIconElement;
        "sicl-input": HTMLSiclInputElement;
        "sicl-radio": HTMLSiclRadioElement;
    }
}
declare namespace LocalJSX {
    interface SiclButton {
        "btn"?: 'primary' | 'secondary' | 'tertiary' | 'warning';
        "disabled"?: boolean;
        "iconLeft"?: string;
        "iconRight"?: string;
        "type"?: string;
    }
    interface SiclCheckbox {
        "inputId"?: string;
        "labelText"?: string;
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
        "inputId"?: string;
        "labelText"?: string;
    }
    interface IntrinsicElements {
        "sicl-button": SiclButton;
        "sicl-checkbox": SiclCheckbox;
        "sicl-icon": SiclIcon;
        "sicl-input": SiclInput;
        "sicl-radio": SiclRadio;
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
        }
    }
}
