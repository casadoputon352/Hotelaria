const rooms = [
    { name: 'Quarto 1', price: 'R$100', type: 'Solteiro', availability: 'Disponível', image: 'hotel1.jpg' },
    { name: 'Quarto 2', price: 'R$150', type: 'Casal', availability: 'Indisponível', image: 'hotel2.jpg' },
    { name: 'Quarto 3', price: 'R$120', type: 'Solteiro', availability: 'Disponível', image: 'hotel3.jpg' },
    
];

function createRoomElement(room) {
    const roomElement = document.createElement('div');
    roomElement.classList.add('room');

    const imageElement = document.createElement('img');
    imageElement.src = room.image;

    const nameElement = document.createElement('h2');
    nameElement.textContent = room.name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Preço: ${room.price}`;

    const typeElement = document.createElement('p');
    typeElement.textContent = `Tipo: ${room.type}`;

    const availabilityElement = document.createElement('p');
    availabilityElement.textContent = `Disponibilidade: ${room.availability}`;

    
    roomElement.appendChild(nameElement);
    roomElement.appendChild(imageElement);
    roomElement.appendChild(priceElement);
    roomElement.appendChild(typeElement);
    roomElement.appendChild(availabilityElement);

    return roomElement;
}

const roomListElement = document.getElementById('room-list');

rooms.forEach(room => {
    const roomElement = createRoomElement(room);
    roomListElement.appendChild(roomElement);
});