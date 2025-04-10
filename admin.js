let ticketCodes = {};

function setGameTime() {
    let selectedTime = document.getElementById('gameTime').value;
    document.getElementById('startTimeDisplay').innerText = selectedTime;
    localStorage.setItem("gameStartTime", selectedTime);
}

function generateTickets() {
    let count = document.getElementById('ticketCount').value;
    let container = document.getElementById('ticketsContainer');
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let ticket = document.createElement('div');
        ticket.className = 'ticket';
        let uniqueCode = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit code
        ticketCodes[uniqueCode] = generateNumbers();

        ticket.innerHTML = `<h3>Ticket No: ${i + 1}</h3><p>Unique Code: ${uniqueCode}</p>`;
        ticket.innerHTML += displayTicketGrid(ticketCodes[uniqueCode]);

        container.appendChild(ticket);
    }

    localStorage.setItem("ticketCodes", JSON.stringify(ticketCodes));
}

function generateNumbers() {
    let numbers = [];
    while (numbers.length < 15) {
        let num = Math.floor(Math.random() * 90) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function displayTicketGrid(numbers) {
    let grid = "<div class='ticket-grid'>";
    for (let row = 0; row < 3; row++) {
        grid += "<div class='ticket-row'>";
        for (let col = 0; col < 9; col++) {
            let number = numbers.includes(col * 10 + row + 1) ? (col * 10 + row + 1) : "";
            let className = number ? "number-box" : "empty-box";
            grid += `<div class="${className}">${number}</div>`;
        }
        grid += "</div>";
    }
    return grid + "</div>";
}
