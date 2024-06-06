async function fetchRoomStatus() {
    try {
        const response = await fetch('http://localhost:5500/rooms/');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de los probadores');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

function createRoomCard(room) {
    const card = document.createElement('cards');
    card.classList.add('room-card');
    
    //card.style.backgroundColor = room.status === 'occupied' ? 'red' : 'gray';

    const name = document.createElement('h4');
    name.textContent = room.name;

    const status = document.createElement('h4');
    if (room.insideUserCode === "") {
        status.textContent = 'Libre';
    } else {
        status.textContent = 'Ocupado';

    }

    card.appendChild(name);
    card.appendChild(status);

    return card;
}

async function renderRoomCards() {
    const cardsContainer = document.getElementById("cardsContainer");
    console.log(cardsContainer)
    const roomsResponse = await fetchRoomStatus();
    console.log(roomsResponse)

    if (roomsResponse.success) {

        roomsResponse.data.forEach(room => {
            const card = createRoomCard(room);
            console.log(card)
            cardsContainer.appendChild(card);
        });
    } else {
        console.error('Hubo un error al obtener los datos de los probadores o la estructura de la respuesta es incorrecta');
    }
}

document.addEventListener('DOMContentLoaded', renderRoomCards);