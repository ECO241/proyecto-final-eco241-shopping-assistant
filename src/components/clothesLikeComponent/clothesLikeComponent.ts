import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./clothesLikeComponent.css"

const enum componentProperties {
    img = "img",
    price = "price",
    text = "text"
}

export class clothesLikeComponent extends HTMLElement {
    properties: Record<componentProperties, string> = {
        img: "",
        price: "",
        text: ""
    }

    static get observedAttributes() {
        const properties: Record<componentProperties, null> = {
            img: null,
            price: null,
            text: null
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
            case componentProperties.price:
                this.properties.price = newValue
                break;
            case componentProperties.text:
                this.properties.text = newValue
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

            const clothesLikeDiv = this.ownerDocument.createElement("div")
            clothesLikeDiv.setAttribute("id", "clothesLikeDiv")
            this.shadowRoot.appendChild(clothesLikeDiv)

            const clothesImg = this.ownerDocument.createElement("img")
            clothesImg.src = this.properties.img
            clothesLikeDiv.appendChild(clothesImg)

            const clothesLikeTextDiv = this.ownerDocument.createElement("div")
            clothesLikeTextDiv.setAttribute("id", "clothesLikeTextDiv")
            clothesLikeDiv.appendChild(clothesLikeTextDiv)

            const clothesText = this.ownerDocument.createElement("h3")
            clothesText.innerText = this.properties.text
            clothesLikeTextDiv.appendChild(clothesText)

            const clothesPrice = this.ownerDocument.createElement("h3")
            clothesPrice.setAttribute("id", "clothesPrice")
            clothesPrice.innerText = `$ ${this.properties.price}`
            clothesLikeTextDiv.appendChild(clothesPrice)

            const likeDiv = this.ownerDocument.createElement("div")
            likeDiv.setAttribute("id", "likeDiv")
            clothesLikeTextDiv.appendChild(likeDiv)

            const likeButton = this.ownerDocument.createElement("img")
            likeButton.setAttribute("src", "/src/assets/svg/Like_Button.svg")
            likeDiv.appendChild(likeButton)

            const dislikeButton = this.ownerDocument.createElement("img")
            dislikeButton.setAttribute("src", "/src/assets/svg/Dislike_Button.svg")
            likeDiv.appendChild(dislikeButton)
        }

    }
}

customElements.define("clothes_like-component", clothesLikeComponent)