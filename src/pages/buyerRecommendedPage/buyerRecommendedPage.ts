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

            const header = this.ownerDocument.createElement("header-component")
            this.shadowRoot.appendChild(header)

            const something = this.ownerDocument.createElement('h1');
            something.innerText = "Own Scaffolding"
            //Para colocarle un id
            something.setAttribute("id", "exapleId")
            this.shadowRoot.appendChild(something);

            const exampleComponent = this.ownerDocument.createElement("component-name")
            this.shadowRoot.appendChild(exampleComponent)

            const clothesLikeComponent = this.ownerDocument.createElement("clothes_like-component")
            clothesLikeComponent.setAttribute("img", "/src/assets/jpg/Top_negro.png")
            clothesLikeComponent.setAttribute("text", "Top en tiras en tejido negro")
            this.shadowRoot.appendChild(clothesLikeComponent)
        }
    }
}

customElements.define('buyer_recommended-page', buyerRecommendedPage)