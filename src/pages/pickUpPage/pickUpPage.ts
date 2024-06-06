import { state } from "../../store";
import { loadCss } from "../../utilities/styles";
import styles from './pickUpPage.css'
import "../../export";

export class pickUpPage extends HTMLElement {
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
            
            const contentDiv = this.ownerDocument.createElement("div")
            contentDiv.setAttribute("id", "contentDiv")
            pageContainer.appendChild(contentDiv)

            const mainText = this.ownerDocument.createElement("h1")
            mainText.setAttribute("id", "mainText")
            mainText.innerText = "¡Todo listo!"
            contentDiv.appendChild(mainText)

            const description = this.ownerDocument.createElement("h3")
            description.innerText = "Acercate al punto de pago mientas nosotros preparamos tus prendas"
            contentDiv.appendChild(description)

        }
    }
}
customElements.define('pick_up-page', pickUpPage)