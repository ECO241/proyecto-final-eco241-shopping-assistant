import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./exampleComponent.css"

const enum componentProperties {
    icon = "icon"
}

export class component extends HTMLElement {
    properties: Record<componentProperties, string> = {
        icon: ""
    }

    static get observedAttributes() {
        const properties: Record<componentProperties, null> = {
            icon: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: componentProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case componentProperties.icon:
                this.properties.icon = newValue
                break;
            default:
                break;
        }
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const something = this.ownerDocument.createElement("h1")
            something.innerText = "Example Component"
            this.shadowRoot.appendChild(something)
        }

    }
}

customElements.define("component-name", component)