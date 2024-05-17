import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./clothesLikeComponent.css"

const enum componentProperties {
    img = "img",
    name = "name"
}

export class clothesLikeComponent extends HTMLElement {
    properties: Record<componentProperties, string> = {
        img: "",
        name: ""
    }

    static get observedAttributes() {
        const properties: Record<componentProperties, null> = {
            img: null,
            name: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: componentProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case componentProperties.img:
                this.properties.img = newValue
                break;
            case componentProperties.name:
                this.properties.name = newValue
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
            something.innerText = "clothesLikeComponent"
            this.shadowRoot.appendChild(something)
        }

    }
}

customElements.define("clothes_like-component", clothesLikeComponent)