function fetchTicket() {
    let code = document.getElementById('playerCode').value;
    let gameStartTime = document.getElementById('gameStartTime').innerText;
    let currentTime = new Date().getHours();

    if (gameStartTime > currentTime) {
        alert("Game has not started yet!");
    } else {
        document.getElementById('playerTicket').innerHTML = `<h3>Your Ticket: ${code}</h3>`;
    }
}
