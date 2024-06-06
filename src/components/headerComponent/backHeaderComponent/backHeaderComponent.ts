import { loadCss } from "../../../utilities/styles";
import "../../../export";
import styles from "./backHeaderComponent.css"

const enum headerProperties {
    icon = "icon"
}

export class backHeaderComponent extends HTMLElement {
    properties: Record<headerProperties, string> = {
        icon: ""
    }

    static get observedAttributes() {
        const properties: Record<headerProperties, null> = {
            icon: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: headerProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case headerProperties.icon:
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

            const bar = this.ownerDocument.createElement("div")
            bar.setAttribute("id", "bar")
            this.shadowRoot.appendChild(bar)

            const backIcon = this.ownerDocument.createElement("img")
            backIcon.setAttribute("src", "/src/assets/svg/Arrow_left.svg")
            backIcon.setAttribute("id", "backIcon")
            bar.appendChild(backIcon)

        }

    }
}

customElements.define("back_header-component", backHeaderComponent)