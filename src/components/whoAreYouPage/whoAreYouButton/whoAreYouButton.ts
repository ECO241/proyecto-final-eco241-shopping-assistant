import { loadCss } from "../../../utilities/styles";
import { directorioExport } from "../../../export";
import styles from "./whoAreYouButton.css"
import { dispatch, state } from "../../../store";
import { changeScreen, updateRoomId } from "../../../store/actions";
import { ScreensTypes } from "../../../types/screens";
import { socket } from "../../../utilities/serverClientSide";

const enum whoAreYouButtonProperties {
    type = "type"
}

export class whoAreYouButton extends HTMLElement {
    properties: Record<whoAreYouButtonProperties, string> = {
        type: ""
    }

    static get observedAttributes() {
        const properties: Record<whoAreYouButtonProperties, null> = {
            type: null,
        }
        return Object.keys(properties);
    }

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    attributeChangedCallback(propName: whoAreYouButtonProperties, oldValue: string, newValue: string) {
        switch (propName) {
            case whoAreYouButtonProperties.type:
                this.properties.type = newValue
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

            const buttonContainer = this.ownerDocument.createElement("div")
            buttonContainer.setAttribute("id", "buttonContainer")
            this.shadowRoot.appendChild(buttonContainer)

            const buttonText = this.ownerDocument.createElement("p")
            buttonContainer.appendChild(buttonText)

            if (this.properties.type === "buyer") {
                buttonText.innerText = "Buyer"
                buttonContainer.addEventListener("click", async () => {
                    console.log(state.userId)
                    await fetch(`http://localhost:5500/rooms/${state.roomId}/insideUser/${state.userId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ insideUserCode: state.userId }),
                    })
                    dispatch(
                        changeScreen(ScreensTypes.waitingForOtherPage, true)
                    )
                    //alert("Buyer")
                })
            }

            if (this.properties.type === "companion") {
                buttonText.innerText = "companion"
                buttonContainer.addEventListener("click", () => {
                    dispatch(
                        changeScreen(ScreensTypes.waitingForOtherPage, true)
                    )
                    fetch(`http://localhost:5500/rooms/${state.roomId}/outsideUser/${state.userId}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ outsideUserCode: state.userId }),
                    })
                    alert("Companion")
                })
            }
        }

    }
}

customElements.define("who_are_you-button", whoAreYouButton)