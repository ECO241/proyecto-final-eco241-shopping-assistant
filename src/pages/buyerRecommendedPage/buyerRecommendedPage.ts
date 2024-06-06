import "../../export";
// import { AppContainer } from "../..";
import styles from "./buyerRecommendedPage.css"
import { loadCss } from "../../utilities/styles";

export class buyerRecommendedPage extends HTMLElement {
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

            const header = this.ownerDocument.createElement("header-component")
            pageContainer.appendChild(header)

            const contentDiv = this.ownerDocument.createElement("div")
            contentDiv.setAttribute("id", "contentDiv")
            pageContainer.appendChild(contentDiv)

            const description = this.ownerDocument.createElement("p")
            description.setAttribute("id", "description")
            description.innerText = "Echa un vistazo a estas prendas que recomienda tu compañero"
            contentDiv.appendChild(description)

            const clothesLikeComponent = this.ownerDocument.createElement("clothes_like-component")
            clothesLikeComponent.setAttribute("img", "/src/assets/jpg/Top_negro.png")
            clothesLikeComponent.setAttribute("price", "114,000")
            clothesLikeComponent.setAttribute("text", "Top en tiras en tejido negro")
            contentDiv.appendChild(clothesLikeComponent)

            const askForClothesComponent = this.ownerDocument.createElement("ask_for_clothes-component")
            askForClothesComponent.setAttribute("img", "/src/assets/jpg/Top_negro.png")
            askForClothesComponent.setAttribute("price", "114,000")
            askForClothesComponent.setAttribute("text", "Top en tiras en tejido negro")
            contentDiv.appendChild(askForClothesComponent)
        }
    }
}

customElements.define('buyer_recommended-page', buyerRecommendedPage)