import "../../export";
import styles from "./landingPage.css" //Actualizar la ruta del css para cada componente
import { loadCss } from "../../utilities/styles";
import { dispatch } from "../../store";
import { changeScreen } from "../../store/actions";
import { ScreensTypes } from "../../types/screens";

export class landingPage extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if (this.shadowRoot) {
            loadCss(this, styles)

            const pageContainer = this.ownerDocument.createElement("div")
            pageContainer.setAttribute("id", "pageContainer")
            this.shadowRoot.appendChild(pageContainer)

            const navBarLanding = this.ownerDocument.createElement("div")
            navBarLanding.setAttribute("id", "navBarLanding")
            pageContainer.appendChild(navBarLanding)

            const logoHyM = this.ownerDocument.createElement("img")
            logoHyM.setAttribute("src", "/src/assets/svg/HyM Logo.svg")
            logoHyM.setAttribute("id", "logoHyM")
            navBarLanding.appendChild(logoHyM)
            
            const espacioNavbar = this.ownerDocument.createElement("div")
            espacioNavbar.classList.add("espacioHorizontal")
            navBarLanding.appendChild(espacioNavbar)

            const ingresarButton = this.ownerDocument.createElement("button")
            ingresarButton.setAttribute("id", "ingresarButton")
            ingresarButton.innerText = "Ingresar"
            navBarLanding.appendChild(ingresarButton)

            const welcomeSection = this.ownerDocument.createElement("div")
            welcomeSection.setAttribute("id", "welcomeSection")
            pageContainer.appendChild(welcomeSection)

            const welcomeInformationContainer = this.ownerDocument.createElement("div")
            welcomeInformationContainer.setAttribute("id", "welcomeInformationContainer")
            welcomeSection.appendChild(welcomeInformationContainer)

            const welcomeInfoTitle = this.ownerDocument.createElement("h1")
            welcomeInfoTitle.innerText = "BIENVENIDO"
            welcomeInformationContainer.appendChild(welcomeInfoTitle)

            const welcomeInforSubitle = this.ownerDocument.createElement("p")
            welcomeInforSubitle.innerText = "Shooping Assistant"
            welcomeInformationContainer.appendChild(welcomeInforSubitle)

            const scanQRSection = this.ownerDocument.createElement("div")
            scanQRSection.setAttribute("id", "scanQRSection")
            pageContainer.appendChild(scanQRSection)

            const scanInformation = this.ownerDocument.createElement("p")
            scanInformation.innerText = "Shooping Assistant es un asistente para los usuarios de la tienda y los probadores. Escanea el código QR del probador para acceder a la sala y comunicarte con tu acompañante. \n También puedes solicitar nuevas prendas y calificarlas."
            scanQRSection.appendChild(scanInformation)

            const scanQrButton = this.ownerDocument.createElement("button")
            scanQrButton.innerText = "Escanear QR"
            scanQRSection.appendChild(scanQrButton)

            
            scanQrButton.addEventListener('click', () => {
                dispatch(
                    changeScreen(ScreensTypes.scanPage, true)
                )
            })
        }
    }
}

customElements.define('landing-page', landingPage)