import "../../export";
// import { AppContainer } from "../..";
import styles from "./addToCartPage.css"
import { loadCss } from "../../utilities/styles";

export class addToCartPage extends HTMLElement {
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

            const header = this.ownerDocument.createElement("back_header-component")
            pageContainer.appendChild(header)

            const contentDiv = this.ownerDocument.createElement("div")
            contentDiv.setAttribute("id", "contentDiv")
            pageContainer.appendChild(contentDiv)

            const searchDiv = this.ownerDocument.createElement("div")
            searchDiv.setAttribute("id", "searchDiv")
            contentDiv.appendChild(searchDiv)

            const searchIcon = this.ownerDocument.createElement("img")
            searchIcon.setAttribute("id", "searchIcon")
            searchIcon.setAttribute("src", "/src/assets/svg/Search_Icon.svg")
            searchDiv.appendChild(searchIcon)

            const searchInput = this.ownerDocument.createElement("input")
            searchInput.setAttribute("id", "searchInput")
            searchInput.placeholder = "Busca una prenda por su codigo"
            searchDiv.appendChild(searchInput)

            const addToCartComponent = this.ownerDocument.createElement("add_to_cart-component")
            addToCartComponent.setAttribute("img", "/src/assets/jpg/Top_negro.png")
            addToCartComponent.setAttribute("price", "114,000")
            addToCartComponent.setAttribute("text", "Top en tiras en tejido negro")
            addToCartComponent.setAttribute("size", "S")
            contentDiv.appendChild(addToCartComponent)

        }
    }
}

customElements.define('add_to_cart-page', addToCartPage)