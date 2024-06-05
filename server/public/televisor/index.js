const products = [
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/Chiffon.jpg", name: "Vestido Chiffon", price: "$150.000" },
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/Satin.jpg", name: "Vestido Satín V", price: "$115.000" },
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/White.jpg", name: "Oversize White T", price: "$80.000" },
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/Rosa.jpg", name: "Vestido Rosa", price: "$110.000" },
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/Encaje.jpg", name: "Vestido Encaje V", price: "$150.000" },
    { imgSrc: "http://localhost:5500/static/televisor/assets/jpg/Estampado.jpg", name: "Estampado V", price: "$120.000" }
];

function createCard(product) {
    const card = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = product.imgSrc;
    
    const name = document.createElement('h4');
    name.textContent = product.name;
    
    const price = document.createElement('h4');
    price.textContent = product.price;
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    
    return card;
}

function renderCards() {
    const cardsContainer = document.querySelector('.cards .clothes');
    products.forEach(product => {
        const card = createCard(product);
        cardsContainer.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderCards);
