import { state } from "../../store";
import { loadCss } from "../../utilities/styles";
import styles from './cartPage.css'
import "../../export";

export class cartPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)


            const pageContainer = this.ownerDocument.createElement("div")
            pageContainer.setAttribute("id", "pageContainer")
            this.shadowRoot.appendChild(pageContainer)

            if (state.insideUser === state.userId) {
                const header = this.ownerDocument.createElement("header-component_buyer")
                pageContainer.appendChild(header)
            } else if (state.outsideUser === state.userId) {
                const header = this.ownerDocument.createElement("header-component")
                pageContainer.appendChild(header)
            }

            const header = this.ownerDocument.createElement("header-component_buyer")
            pageContainer.appendChild(header)

            const cardsContainer = this.ownerDocument.createElement("div")
            cardsContainer.setAttribute("id", "cardsContainer")
            pageContainer.appendChild(cardsContainer)

            if (state.sessionCart.length === 0) {
                console.log("Empty Cart")
                const emptyCartComponent = this.ownerDocument.createElement("empty-cart")
                cardsContainer.appendChild(emptyCartComponent)
            }

            const addButton = this.ownerDocument.createElement("div")
            addButton.setAttribute("id", "addButton")
            pageContainer.appendChild(addButton)

            const addIcon = this.ownerDocument.createElement("img")
            addIcon.setAttribute('src', '/src/assets/svg/plusIconBlanco.svg')
            addButton.appendChild(addIcon)
        }
    }
}
customElements.define('cart-page', cartPage)