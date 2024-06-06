import { loadCss } from "../../utilities/styles";
import "../../export";
import styles from "./headerComponent.css"
import { dispatch } from "../../store";
import { changeScreen } from "../../store/actions";
import { ScreensTypes } from "../../types/screens";

const enum headerProperties {
    icon = "icon"
}

export class header extends HTMLElement {
    properties: Record<headerProperties, string> = {
        icon: ""
    }

    static get observedAttributes() {
        const properties: Record<headerProperties, null> = {
            icon: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: headerProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case headerProperties.icon:
                this.properties.icon = newValue
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

            const bar = this.ownerDocument.createElement("div")
            bar.setAttribute("id", "bar")
            this.shadowRoot.appendChild(bar)

            const logoHyM = this.ownerDocument.createElement("img")
            logoHyM.setAttribute("src", "/src/assets/svg/HyM Logo.svg")
            logoHyM.setAttribute("id", "logoHyM")
            bar.appendChild(logoHyM)

            const iconDiv = this.ownerDocument.createElement("div")
            iconDiv.setAttribute("id", "iconDiv")
            bar.appendChild(iconDiv)

            const chatIcon = this.ownerDocument.createElement("img")
            chatIcon.setAttribute("src", "/src/assets/svg/usersChat.svg")
            chatIcon.setAttribute("id", "chatIcon")
            iconDiv.appendChild(chatIcon)

            const camaraIcon = this.ownerDocument.createElement("img")
            camaraIcon.setAttribute("src", "/src/assets/svg/Camara Icon.svg")
            camaraIcon.setAttribute("id", "camaraIcon")
            iconDiv.appendChild(camaraIcon)

            logoHyM.addEventListener('click', () => {
                dispatch(
                    changeScreen(ScreensTypes.dressingRoomPage, true)
                )
            })
        }

    }
}

customElements.define("header-component", header)