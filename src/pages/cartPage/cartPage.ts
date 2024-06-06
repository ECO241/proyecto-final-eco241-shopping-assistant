import { dispatch, state } from "../../store";
import { loadCss } from "../../utilities/styles";
import styles from './cartPage.css'
import "../../export";
import { changeScreen } from "../../store/actions";
import { ScreensTypes } from "../../types/screens";

export class cartPage extends HTMLElement {
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
            } else {
                const cart = await this.getClothes()

                if (cart) {
                    cart.forEach((clothe) => {
                        const clotheCard = this.ownerDocument.createElement("cart-card")
                        clotheCard.setAttribute("img", clothe.image)
                        clotheCard.setAttribute("name", clothe.name)
                        clotheCard.setAttribute("price", clothe.price)
                        cardsContainer.appendChild(clotheCard)
                    })
                }

            }

            const addButton = this.ownerDocument.createElement("div")
            addButton.setAttribute("id", "addButton")
            pageContainer.appendChild(addButton)

            const addIcon = this.ownerDocument.createElement("img")
            addIcon.setAttribute('src', '/src/assets/svg/plusIconBlanco.svg')
            addButton.appendChild(addIcon)

            addButton.addEventListener('click', () => {
                dispatch(
                    changeScreen(ScreensTypes.addToCartPage, true)
                )
            })
        }
    }

    async getClothes() {
        const data: Array<any> = []

        for (let index = 0; index < state.sessionCart.length; index++) {
            const element = state.sessionCart[index];
            const res = await fetch(`http://localhost:5500/clothes/clothe/${element}`)
            const resJson = await res.json()
            data.push(resJson.clothesById[0])
            console.log("Push")

            if (state.sessionCart.length === index + 1) {
                return data
            }
        }
    }
}
customElements.define('cart-page', cartPage)