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

    async render() {
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

            const dataRopa = await this.getClothes()
            dataRopa.forEach((prenda: prendaType) => {
                const addToCartComponent = this.ownerDocument.createElement("add_to_cart-component")

                addToCartComponent.setAttribute("img", `${prenda.image}`)
                addToCartComponent.setAttribute("price", `${prenda.price}`)
                addToCartComponent.setAttribute("name", "Top en tiras en tejido negro")
                addToCartComponent.setAttribute("popularity", `${prenda.popularity}`)
                addToCartComponent.setAttribute("id", `${prenda.id}`)

                contentDiv.appendChild(addToCartComponent)
            })

        }
    }

    async getClothes() {
        const dataClothes = await fetch('http://localhost:5500/clothes')
        const dataClothesJson = await dataClothes.json()
        return dataClothesJson.clothes
    }
}

customElements.define('add_to_cart-page', addToCartPage)

interface prendaType {
    created_at: string,
    gender: string,
    id: number,
    image: string,
    name: string,
    popularity: number,
    price: number,
    type: string
}