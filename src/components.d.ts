/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BadgeIcon {
        /**
          * Miniatura do badge
         */
        "mini": boolean;
        /**
          * Tipo do associado associado, morador, inquilino
         */
        "tipo": string;
    }
}
declare global {
    interface HTMLBadgeIconElement extends Components.BadgeIcon, HTMLStencilElement {
    }
    var HTMLBadgeIconElement: {
        prototype: HTMLBadgeIconElement;
        new (): HTMLBadgeIconElement;
    };
    interface HTMLElementTagNameMap {
        "badge-icon": HTMLBadgeIconElement;
    }
}
declare namespace LocalJSX {
    interface BadgeIcon {
        /**
          * Miniatura do badge
         */
        "mini"?: boolean;
        /**
          * Tipo do associado associado, morador, inquilino
         */
        "tipo"?: string;
    }
    interface IntrinsicElements {
        "badge-icon": BadgeIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "badge-icon": LocalJSX.BadgeIcon & JSXBase.HTMLAttributes<HTMLBadgeIconElement>;
        }
    }
}
