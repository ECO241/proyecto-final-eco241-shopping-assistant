import { loadCss } from "../../../utilities/styles";
import "../../../export";
import styles from "./backHeaderComponent.css"
import { dispatch, state } from "../../../store";
import { ScreensTypes } from "../../../types/screens";
import { changeScreen } from "../../../store/actions";


export class backHeaderComponent extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const bar = this.ownerDocument.createElement("div")
            bar.setAttribute("id", "bar")
            this.shadowRoot.appendChild(bar)

            const backIcon = this.ownerDocument.createElement("img")
            backIcon.setAttribute("src", "/src/assets/svg/Arrow_left.svg")
            backIcon.setAttribute("id", "backIcon")
            bar.appendChild(backIcon)

            backIcon.addEventListener('click', () => {
                if (state.screen === ScreensTypes.addToCartPage) {
                    dispatch(
                        changeScreen(ScreensTypes.cartPage, true)
                    )
                }
            })

        }

    }
}

customElements.define("back_header-component", backHeaderComponent)