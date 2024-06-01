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
            this.shadowRoot.appendChild(pageContainer)

            const header = this.ownerDocument.createElement("header-component")
            pageContainer.appendChild(header)

            const tittle = this.ownerDocument.createElement("h1")
            tittle.innerText = "Enviar Prenda"
            pageContainer.appendChild(tittle)

            const description = this.ownerDocument.createElement("h3")
            description.innerText = "Ingresa el código de la prenda y la foto de la galería."
            pageContainer.appendChild(description)

            const codigoDiv = this.ownerDocument.createElement("div")
            codigoDiv.setAttribute("id", "codigoDiv")
            pageContainer.appendChild(codigoDiv)

            const codigoTitle = this.ownerDocument.createElement("h3")
            codigoTitle.innerText = "Código"
            codigoDiv.appendChild(codigoTitle)

            const codigoInput = this.ownerDocument.createElement("input")
            codigoInput.placeholder = "Ingresa el código de la prenda"
            codigoDiv.appendChild(codigoInput)

            const fotoDiv = this.ownerDocument.createElement("div")
            fotoDiv.setAttribute("id", "fotoDiv")
            pageContainer.appendChild(fotoDiv)

            const fotoTitle = this.ownerDocument.createElement("h3")
            fotoTitle.innerText = "Foto"
            fotoDiv.appendChild(fotoTitle)

            const fotoInputDiv = this.ownerDocument.createElement("div")
            fotoInputDiv.setAttribute("id", "fotoInputDiv")
            fotoDiv.appendChild(fotoInputDiv)

            const fileIcon = this.ownerDocument.createElement("img")
            fileIcon.setAttribute("src", "/src/assets/svg/File_Icon.svg")
            fotoInputDiv.appendChild(fileIcon)

            const labelFileInput = this.ownerDocument.createElement("label")
            labelFileInput.setAttribute("for", "fileInput")
            
            fotoInputDiv.appendChild(labelFileInput)

            const fileInput = this.ownerDocument.createElement("input")
            fileInput.setAttribute("id","fileInput")
            fileInput.type = "file"
            fileInput.placeholder = "Ningún archivo seleccionado"
            fotoInputDiv.appendChild(fileInput)

            const sendButton = this.ownerDocument.createElement("button")
            sendButton.innerText = "Enviar"
            pageContainer.appendChild(sendButton)
            

        }
    }
}

customElements.define('send_clothes-page', sendClothesPage)