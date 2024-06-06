async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:5500/clothes/popular');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de los productos');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return []; 
    }
}

function createCard(product) {
    const card = document.createElement('div');
    
    const img = document.createElement('img');
    img.src = product.image;
    
    const name = document.createElement('h4');
    name.textContent = product.name;
    
    const price = document.createElement('h4');
    price.textContent = product.price;
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    
    return card;
}

async function renderCards() {
    const cardsContainer = document.querySelector('.cards .clothes');
    const productsResponse = await fetchProducts();

    if (productsResponse.success) {
        const products = productsResponse.clothesByPopularity;

        products.forEach(product => {
            const card = createCard(product);
            cardsContainer.appendChild(card);
        });
    } else {
        console.error('Hubo un error al obtener los datos de los productos');
    }
}

document.addEventListener('DOMContentLoaded', renderCards);
