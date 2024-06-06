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
    const card = document.createElement('div');
    card.classList.add('room-card');
    card.style.backgroundColor = room.status === 'occupied' ? 'red' : 'gray';

    const name = document.createElement('h4');
    name.textContent = room.name;

    const status = document.createElement('h4');
    status.textContent = room.status === 'occupied' ? 'Ocupado' : 'Libre';

    card.appendChild(name);
    card.appendChild(status);

    return card;
}

async function renderRoomCards() {
    const cardsContainer = document.querySelector('.cards .rooms');
    cardsContainer.innerHTML = '';
    const roomsResponse = await fetchRoomStatus();

    if (roomsResponse.success) {
        const rooms = roomsResponse.rooms;

        rooms.forEach(room => {
            const card = createRoomCard(room);
            cardsContainer.appendChild(card);
        });
    } else {
        console.error('Hubo un error al obtener los datos de los probadores');
    }
}

document.addEventListener('DOMContentLoaded', renderRoomCards);