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
                    const waitingForOtherPage = this.ownerDocument.createElement("waiting_for_other-page")
                    this.shadowRoot.appendChild(waitingForOtherPage)
                    break;
                case ScreensTypes.successfulConnectionPage:
                    const successfulConnectionPage = this.ownerDocument.createElement("successful_connection-page")
                    this.shadowRoot.appendChild(successfulConnectionPage)
                    break;
                case ScreensTypes.dressingRoomPage:
                    const dressingRoomPage = this.ownerDocument.createElement("dressing_room-page")
                    this.shadowRoot.appendChild(dressingRoomPage)
                    break;
                case ScreensTypes.cartPage:
                    const cartPage = this.ownerDocument.createElement('cart-page')
                    this.shadowRoot.appendChild(cartPage)
                    break
                case ScreensTypes.examplePage:
                    console.log("example-page")
                    const examplePage = this.ownerDocument.createElement("example-page")
                    this.shadowRoot.appendChild(examplePage)
                    break;
                case ScreensTypes.sendClothesPage:
                    console.log("send_clothes-page")
                    const sendClothesPage = this.ownerDocument.createElement("send_clothes-page")
                    this.shadowRoot.appendChild(sendClothesPage)
                    break;
                case ScreensTypes.buyerRecommendedPage:
                    console.log("send_clothes-page")
                    const buyerRecommendedPage = this.ownerDocument.createElement("buyer_recommended-page")
                    this.shadowRoot.appendChild(buyerRecommendedPage)
                    break;
                case ScreensTypes.addToCartPage:
                    const addToCartPage = this.ownerDocument.createElement('add_to_cart-page')
                    this.shadowRoot.appendChild(addToCartPage)
                case ScreensTypes.pickUpPage:
                    const pickUpPage = this.ownerDocument.createElement('pick_up-page')
                    this.shadowRoot.appendChild(pickUpPage)
                default:
                    break;
            }
        }
    }
}

customElements.define('app-container', AppContainer)