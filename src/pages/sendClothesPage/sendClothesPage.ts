import "../../export";
// import { AppContainer } from "../..";
import styles from "./sendClothesPage.css"
import { loadCss } from "../../utilities/styles";

export class sendClothesPage extends HTMLElement {
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

            const header = this.ownerDocument.createElement("header-component_buyer")
            pageContainer.appendChild(header)

            const contentDiv = this.ownerDocument.createElement("div")
            contentDiv.setAttribute("id", "contentDiv")
            pageContainer.appendChild(contentDiv)

            const tittle = this.ownerDocument.createElement("h1")
            tittle.setAttribute("id", "tittle")
            tittle.innerText = "Enviar Prenda"
            contentDiv.appendChild(tittle)

            const description = this.ownerDocument.createElement("h3")
            description.setAttribute("id", "description")
            description.innerText = "Ingresa el código de la prenda y la foto de la galería."
            contentDiv.appendChild(description)

            const inputsDiv = this.ownerDocument.createElement("div")
            inputsDiv.setAttribute("id", "inputsDiv")
            contentDiv.appendChild(inputsDiv)

            const codigoDiv = this.ownerDocument.createElement("div")
            codigoDiv.setAttribute("id", "codigoDiv")
            inputsDiv.appendChild(codigoDiv)

            const codigoTitle = this.ownerDocument.createElement("h3")
            codigoTitle.setAttribute("class", "inputsTitle")
            codigoTitle.innerText = "Código"
            codigoDiv.appendChild(codigoTitle)

            const codigoInput = this.ownerDocument.createElement("input")
            codigoInput.setAttribute("class", "inputs")
            codigoInput.placeholder = "Ingresa el código de la prenda"
            codigoDiv.appendChild(codigoInput)

            const fotoDiv = this.ownerDocument.createElement("div")
            fotoDiv.setAttribute("id", "fotoDiv")
            inputsDiv.appendChild(fotoDiv)

            const fotoTitle = this.ownerDocument.createElement("h3")
            fotoTitle.setAttribute("class", "inputsTitle")
            fotoTitle.innerText = "Foto"
            fotoDiv.appendChild(fotoTitle)

            const fotoInputDiv = this.ownerDocument.createElement("div")
            fotoInputDiv.setAttribute("id", "fotoInputDiv")
            fotoDiv.appendChild(fotoInputDiv)

            const fileIcon = this.ownerDocument.createElement("img")
            fileIcon.setAttribute("src", "/src/assets/svg/File_Icon.svg")
            fotoInputDiv.appendChild(fileIcon)

            const fileInput = this.ownerDocument.createElement("input")
            fileInput.setAttribute("id","fileInput")
            fileInput.type = "file"
            fileInput.placeholder = "Ningún archivo seleccionado"
            fotoInputDiv.appendChild(fileInput)

            const sendButton = this.ownerDocument.createElement("button")
            sendButton.setAttribute("id", "sendButton")
            sendButton.innerText = "Enviar"
            contentDiv.appendChild(sendButton)
            

        }
    }
}

customElements.define('send_clothes-page', sendClothesPage)