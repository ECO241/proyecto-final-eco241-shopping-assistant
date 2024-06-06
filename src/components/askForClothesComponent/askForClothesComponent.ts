import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./askForClothesComponent.css"

const enum componentProperties {
    img = "img",
    price = "price",
    text = "text"
}

export class askForClothesComponent extends HTMLElement {
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

            const askForClothesDiv = this.ownerDocument.createElement("div")
            askForClothesDiv.setAttribute("id", "askForClothesDiv")
            this.shadowRoot.appendChild(askForClothesDiv)

            const clothesImg = this.ownerDocument.createElement("img")
            clothesImg.src = this.properties.img
            askForClothesDiv.appendChild(clothesImg)

            const clothesInfoDiv = this.ownerDocument.createElement("div")
            clothesInfoDiv.setAttribute("id", "clothesInfoDiv")
            askForClothesDiv.appendChild(clothesInfoDiv)

            const clothesText = this.ownerDocument.createElement("h3")
            clothesText.setAttribute("id", "clothesText")
            clothesText.innerText = this.properties.text
            clothesInfoDiv.appendChild(clothesText)

            const clothesPrice = this.ownerDocument.createElement("h3")
            clothesPrice.setAttribute("id", "clothesPrice")
            clothesPrice.innerText = `$ ${this.properties.price}`
            clothesInfoDiv.appendChild(clothesPrice)
            
            const sizesDiv = this.ownerDocument.createElement("div")
            sizesDiv.setAttribute("id", "sizesDiv")
            clothesInfoDiv.appendChild(sizesDiv)

            const sizeText = this.ownerDocument.createElement("p")
            sizeText.setAttribute("id", "sizeText")
            sizeText.innerText = "Talla:"
            sizesDiv.appendChild(sizeText)

            const xsButton = this.ownerDocument.createElement("button")
            xsButton.setAttribute("class", "sizeButton")
            xsButton.setAttribute("id", "xsButton")
            xsButton.innerText = "XS"
            sizesDiv.appendChild(xsButton)

            const sButton = this.ownerDocument.createElement("button")
            sButton.setAttribute("class", "sizeButton")
            sButton.setAttribute("id", "sButton")
            sButton.innerText = "S"
            sizesDiv.appendChild(sButton)

            const mButton = this.ownerDocument.createElement("button")
            mButton.setAttribute("class", "sizeButton")
            mButton.setAttribute("id", "mButton")
            mButton.innerText = "M"
            sizesDiv.appendChild(mButton)

            const lButton = this.ownerDocument.createElement("button")
            lButton.setAttribute("class", "sizeButton")
            lButton.setAttribute("id", "lButton")
            lButton.innerText = "L"
            sizesDiv.appendChild(lButton)

            const xlButton = this.ownerDocument.createElement("button")
            xlButton.setAttribute("class", "sizeButton")
            xlButton.setAttribute("id", "xlButton")
            xlButton.innerText = "XL"
            sizesDiv.appendChild(xlButton)

            const askButton = this.ownerDocument.createElement("button")
            askButton.setAttribute("id", "askButton")
            askButton.innerText = "Pedir a un asesor"
            clothesInfoDiv.appendChild(askButton)
            
        }

    }
}

customElements.define("ask_for_clothes-component", askForClothesComponent)