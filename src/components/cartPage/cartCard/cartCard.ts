import { loadCss } from "../../../utilities/styles";
import "../../../export";
import styles from "./cartCard.css"
import { observers, state } from "../../../store";
import { getRoomData } from "../../../utilities/getRoomData";

const enum cartCardProperties {
    img = "img",
    name = "name",
    price = "price",
    id = "id"
}

export class cartCard extends HTMLElement {
    properties: Record<cartCardProperties, string> = {
        img: "",
        name: "",
        price: "",
        id: ""
    }

    static get observedAttributes() {
        const properties: Record<cartCardProperties, null> = {
            img: null,
            name: null,
            price: null,
            id: null
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: cartCardProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case cartCardProperties.img:
                this.properties.img = newValue
                break;
            case cartCardProperties.name:
                this.properties.name = newValue
                break;
            case cartCardProperties.price:
                this.properties.price = newValue
                break;
            case cartCardProperties.id:
                this.properties.id = newValue
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

            const cardContainer = this.ownerDocument.createElement("div")
            cardContainer.setAttribute("id", "cardContainer")
            this.shadowRoot.appendChild(cardContainer)

            const img = this.ownerDocument.createElement("img")
            img.setAttribute("src", this.properties.img)
            img.setAttribute("id", "img")
            cardContainer.appendChild(img)

            const infoContainer = this.ownerDocument.createElement("div")
            infoContainer.setAttribute("id", "infoContainer")
            cardContainer.appendChild(infoContainer)

            const name = this.ownerDocument.createElement("p")
            name.innerText = this.properties.name
            infoContainer.appendChild(name)

            const price = this.ownerDocument.createElement("p")
            price.innerText = `$${this.properties.price}`
            infoContainer.appendChild(price)

            const deleteButton = this.ownerDocument.createElement("div")
            deleteButton.setAttribute("id", "deleteButton")
            infoContainer.appendChild(deleteButton)

            const deleteIcon = this.ownerDocument.createElement("img")
            deleteIcon.setAttribute("src", "/src/assets/svg/deleteBlanco.svg")
            deleteButton.appendChild(deleteIcon)


            //apojdhaj
            deleteButton.addEventListener('click', async () => {
                console.log("Delete Prenda")
                const response = await fetch(`http://localhost:5500/rooms/${state.roomId}/clothes/${this.properties.id}/delete`, { method: 'PATCH' })
                observers.forEach((o) => o.render());
            })
        }

    }
}

customElements.define("cart-card", cartCard)