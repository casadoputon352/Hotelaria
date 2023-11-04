const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
const email = urlParams.get('email');
const checkin = urlParams.get('checkin');
const checkout = urlParams.get('checkout');
const guests = urlParams.get('guests');

const confirmationDetailsElement = document.getElementById('confirmation-details');

const confirmationMessage = `
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Data de Check-in:</strong> ${checkin}</p>
    <p><strong>Data de Check-out:</strong> ${checkout}</p>
    <p><strong>Número de Hóspedes:</strong> ${guests}</p>
`;

confirmationDetailsElement.innerHTML = confirmationMessage;