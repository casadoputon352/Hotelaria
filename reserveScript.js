document.getElementById('reserve-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const guests = document.getElementById('guests').value;

    // Aqui você pode implementar a lógica de envio dos dados para um servidor ou fazer o que preferir com eles.

    alert(`Reserva realizada com sucesso!\n\nNome: ${name}\nE-mail: ${email}\nCheck-in: ${checkin}\nCheck-out: ${checkout}\nNúmero de Hóspedes: ${guests}`);
});