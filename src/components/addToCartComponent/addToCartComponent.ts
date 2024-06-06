import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./addToCartComponent.css"

const enum componentProperties {
    img = "img",
    price = "price",
    name = "name",
    popularity = "popularity",
    id = "id"
}

export class addToCartComponent extends HTMLElement {
    properties: Record<componentProperties, string> = {
        img: "",
        price: "",
        name: "",
        popularity: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<componentProperties, null> = {
            img: null,
            price: null,
            name: null,
            popularity: null,
            id: null
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
            case componentProperties.id:
                this.properties.id = newValue
                break;
            case componentProperties.name:
                this.properties.name = newValue
                break;
            case componentProperties.popularity:
                this.properties.popularity = newValue
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

            const addToCartDiv = this.ownerDocument.createElement("div")
            addToCartDiv.setAttribute("id", "addToCartDiv")
            this.shadowRoot.appendChild(addToCartDiv)

            const clothesImg = this.ownerDocument.createElement("img")
            clothesImg.src = this.properties.img
            addToCartDiv.appendChild(clothesImg)

            const addToCartTextDiv = this.ownerDocument.createElement("div")
            addToCartTextDiv.setAttribute("id", "addToCartTextDiv")
            addToCartDiv.appendChild(addToCartTextDiv)

            const clothesText = this.ownerDocument.createElement("h3")
            clothesText.setAttribute("id", "clothesText")
            clothesText.innerText = this.properties.name
            addToCartTextDiv.appendChild(clothesText)

            // const clothesSize = this.ownerDocument.createElement("h3")
            // clothesSize.setAttribute("id", "clothesSize")
            // clothesSize.innerText = `Talla: ${this.properties.size}`
            // addToCartTextDiv.appendChild(clothesSize)

            const clothesPrice = this.ownerDocument.createElement("h3")
            clothesPrice.setAttribute("id", "clothesPrice")
            clothesPrice.innerText = `$ ${this.properties.price}`
            addToCartTextDiv.appendChild(clothesPrice)

            const addButton = this.ownerDocument.createElement("div")
            addButton.setAttribute("id", "addButton")
            addToCartDiv.appendChild(addButton)

            const addIcon = this.ownerDocument.createElement("img")
            addIcon.setAttribute('src', '/src/assets/svg/plusIconBlanco.svg')
            addButton.appendChild(addIcon)

            addIcon.addEventListener('click', () => {
                console.log(this.properties.id)
            })
        }

    }
}

customElements.define("add_to_cart-component", addToCartComponent)