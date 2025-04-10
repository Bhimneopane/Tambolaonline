function generateTickets() {
    let count = document.getElementById('ticketCount').value;
    let container = document.getElementById('ticketsContainer');
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let ticket = document.createElement('div');
        ticket.className = 'ticket';

        let uniqueCode = Math.floor(10000 + Math.random() * 90000); // Generate 5-digit code
        ticket.innerHTML = `<h3>Ticket ${i + 1}</h3><p>Code: ${uniqueCode}</p>`;

        let numbers = generateNumbers();
        numbers.forEach(num => {
            let numDiv = document.createElement('div');
            numDiv.className = 'number';
            numDiv.innerText = num;
            ticket.appendChild(numDiv);
        });

        container.appendChild(ticket);
    }
}

function setGameTime() {
    let selectedTime = document.getElementById('gameTime').value;
    document.getElementById('startTimeDisplay').innerText = selectedTime;
}

function generateNumbers() {
    let numbers = [];
    while (numbers.length < 15) {
        let num = Math.floor(Math.random() * 90) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}
