import "../../export";
import styles from "./dressingRoomPage.css" //Actualizar la ruta del css para cada componente
import { loadCss } from "../../utilities/styles";
import { dispatch } from "../../store";
import { changeScreen } from "../../store/actions";
import { ScreensTypes } from "../../types/screens";

export class dressingRoomPage extends HTMLElement {
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

            const header = this.ownerDocument.createElement("header-component")
            pageContainer.appendChild(header)

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
            welcomeInforSubitle.innerText = "PROBADOR 1"
            welcomeInformationContainer.appendChild(welcomeInforSubitle)

            const recommendationsSection = this.ownerDocument.createElement("div")
            recommendationsSection.setAttribute("id", "recommendationsSection")
            pageContainer.appendChild(recommendationsSection)

            const recommendationsTextDiv = this.ownerDocument.createElement("div")
            recommendationsTextDiv.setAttribute("id", "recommendationsTextDiv")
            recommendationsSection.appendChild(recommendationsTextDiv)

            const topSalesTitle = this.ownerDocument.createElement("h4")
            topSalesTitle.setAttribute("id", "topSalesTitle")
            topSalesTitle.innerText = "El top 3 de la semana"
            recommendationsTextDiv.appendChild(topSalesTitle)

            const topSalesText = this.ownerDocument.createElement("p")
            topSalesText.setAttribute("id", "topSalesText")
            topSalesText.innerText = "Las prendas favoritas de nuestros clientes"
            recommendationsTextDiv.appendChild(topSalesText)

            const cardSection = this.ownerDocument.createElement("div")
            cardSection.setAttribute("id","cardSection")
            recommendationsSection.appendChild(cardSection)

            const cardDressingRoom1 = this.ownerDocument.createElement("card_dressing_room-component")
            cardDressingRoom1.setAttribute("img", "/src/assets/jpg/dress_2.png")
            cardSection.appendChild(cardDressingRoom1)

            const cardDressingRoom2 = this.ownerDocument.createElement("card_dressing_room-component")
            cardDressingRoom2.setAttribute("img", "/src/assets/jpg/dress_1.png")
            cardSection.appendChild(cardDressingRoom2)

            const cardDressingRoom3 = this.ownerDocument.createElement("card_dressing_room-component")
            cardDressingRoom3.setAttribute("img", "/src/assets/jpg/dress_3.png")
            cardSection.appendChild(cardDressingRoom3)

            const buttonDiv = this.ownerDocument.createElement("div")
            buttonDiv.setAttribute("id", "buttonDiv")
            recommendationsSection.appendChild(buttonDiv)

            const Button = this.ownerDocument.createElement("button")
            Button.innerText = "Solicitar"
            buttonDiv.appendChild(Button)

        }
    }
}

customElements.define('dressing_room-page', dressingRoomPage)