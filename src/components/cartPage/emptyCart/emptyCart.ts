import { loadCss } from "../../../utilities/styles";
import "../../../export";
import styles from "./emptyCart.css"


export class emptyCart extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const messageContainer = this.ownerDocument.createElement("div")
            messageContainer.setAttribute('id', 'messageContainer')
            this.shadowRoot.appendChild(messageContainer)

            const emptyCartIcon = this.ownerDocument.createElement("img")
            emptyCartIcon.setAttribute('src', '/src/assets/svg/emptyCartIcon.svg')
            messageContainer.appendChild(emptyCartIcon)

            const title = this.ownerDocument.createElement("h2")
            title.innerText = "¡UPS! Esto se ve vacío"
            messageContainer.appendChild(title)

            const subtitle = this.ownerDocument.createElement("p")
            subtitle.innerText = "Primero tienes que llenar tu carrito"
            messageContainer.appendChild(subtitle)
        }

    }
}

customElements.define("empty-cart", emptyCart)