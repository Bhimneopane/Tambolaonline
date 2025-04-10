function fetchTicket() {
    let code = document.getElementById('playerCode').value;
    let gameStartTime = localStorage.getItem("gameStartTime");
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (gameStartTime && currentTime < gameStartTime) {
        alert(`Game has not started yet! It will start at ${gameStartTime}`);
    } else {
        let tickets = JSON.parse(localStorage.getItem("ticketCodes"));
        if (tickets[code]) {
            document.getElementById('playerTicket').innerHTML = displayTicketGrid(tickets[code]);
        } else {
            alert("Invalid code!");
        }
    }
}
