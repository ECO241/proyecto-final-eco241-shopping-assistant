import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./headerComponent.css"

const enum headerProperties {
    icon = "icon"
}

export class header extends HTMLElement {
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

            const logoHyM = this.ownerDocument.createElement("img")
            logoHyM.setAttribute("src", "/src/assets/svg/HyM Logo.svg")
            logoHyM.setAttribute("id", "logoHyM")
            bar.appendChild(logoHyM)

            const iconDiv = this.ownerDocument.createElement("div")
            iconDiv.setAttribute("id", "iconDiv")
            bar.appendChild(iconDiv)

            const chatIcon = this.ownerDocument.createElement("img")
            chatIcon.setAttribute("src", "/src/assets/svg/Chat Icon.svg")
            chatIcon.setAttribute("id", "chatIcon")
            iconDiv.appendChild(chatIcon)

            const camaraIcon = this.ownerDocument.createElement("img")
            camaraIcon.setAttribute("src","/src/assets/svg/Camara Icon.svg")
            camaraIcon.setAttribute("id", "camaraIcon")
            iconDiv.appendChild(camaraIcon)

            const bagIcon = this.ownerDocument.createElement("img")
            bagIcon.setAttribute("src","/src/assets/svg/Bag Icon.svg")
            bagIcon.setAttribute("id", "bagIcon")
            iconDiv.appendChild(bagIcon)

            // const something = this.ownerDocument.createElement("h1")
            // something.innerText = "Example Component"
            // this.shadowRoot.appendChild(something)
        }

    }
}

customElements.define("header-component", header)