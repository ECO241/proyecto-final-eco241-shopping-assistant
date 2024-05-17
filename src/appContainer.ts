import "./export";
import styles from "./appContainer.css"
import { loadCss } from "./utilities/styles";
import { addObserver, state } from "./store";
import { ScreensTypes } from "./types/screens";
import "./utilities/serverClientSide";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            this.shadowRoot.innerHTML = ""
            switch (state.screen) {
                case ScreensTypes.landingPage:
                    const landingPage = this.ownerDocument.createElement("landing-page")
                    this.shadowRoot.appendChild(landingPage)
                    break;
                case ScreensTypes.scanPage:
                    const scanPage = this.ownerDocument.createElement("scan-page")
                    this.shadowRoot.appendChild(scanPage)
                    break;
                case ScreensTypes.whoAreYouPage:
                    const whoAreYouPage = this.ownerDocument.createElement("who_are_you-page")
                    this.shadowRoot.appendChild(whoAreYouPage)
                    break;
                case ScreensTypes.waitingForOtherPage:
                    console.log("waiting_for_other-page")
                    const waitingForOtherPage = this.ownerDocument.createElement("waiting_for_other-page")
                    this.shadowRoot.appendChild(waitingForOtherPage)
                    break;
                case ScreensTypes.successfulConnectionPage:
                    console.log("successful_connection-page")
                    const successfulConnectionPage = this.ownerDocument.createElement("successful_connection-page")
                    this.shadowRoot.appendChild(successfulConnectionPage)
                    break;
                case ScreensTypes.dressingRoomPage:
                    console.log("dressing_room-page")
                    const dressingRoomPage = this.ownerDocument.createElement("dressing_room-page")
                    this.shadowRoot.appendChild(dressingRoomPage)
                    break;
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)