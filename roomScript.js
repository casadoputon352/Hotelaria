const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const roomName = urlParams.get('name');

const room = rooms.find(room => room.name === roomName);

function displayRoomDetails() {
    const roomDetailsElement = document.getElementById('room-details');

    const nameElement = document.createElement('h1');
    nameElement.textContent = room.name;

    const priceElement = document.createElement('p');
    priceElement.textContent = `Preço: ${room.price}`;

    const typeElement = document.createElement('p');
    typeElement.textContent = `Tipo: ${room.type}`;

    const availabilityElement = document.createElement('p');
    availabilityElement.textContent = `Disponibilidade: ${room.availability}`;

    const imageElement = document.createElement('img');
    imageElement.src = room.image;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = `Escolher uma boa hospedagem é parte essencial para curtir as férias. Então, você precisa conhecer o (nome do hotel). Excelente localização, próximo dos principais pontos turísticos da cidade`;

    roomDetailsElement.appendChild(nameElement);
    roomDetailsElement.appendChild(priceElement);
    roomDetailsElement.appendChild(typeElement);
    roomDetailsElement.appendChild(availabilityElement);
    roomDetailsElement.appendChild(imageElement);
    roomDetailsElement.appendChild(descriptionElement);
}

displayRoomDetails();