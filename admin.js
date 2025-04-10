function generateTickets() {
    let count = document.getElementById('ticketCount').value;
    let container = document.getElementById('ticketsContainer');
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        let ticket = document.createElement('div');
        ticket.className = 'ticket';
        let ticketNumber = String(i + 1).padStart(3, '0'); // Generates "001", "002", etc.

        ticket.innerHTML = `<h3>Ticket No: ${ticketNumber}</h3>`;

        let ticketGrid = document.createElement('div');
        ticketGrid.className = 'ticket-grid';

        let numbers = generateNumbers();
        let row = [];

        numbers.forEach((num, index) => {
            let box = document.createElement('div');
            box.className = 'number-box';
            box.innerText = num;

            row.push(box);

            if ((index + 1) % 5 === 0 || index === numbers.length - 1) {
                let rowDiv = document.createElement('div');
                rowDiv.className = 'ticket-row';
                row.forEach(box => rowDiv.appendChild(box));
                ticketGrid.appendChild(rowDiv);
                row = [];
            }
        });

        ticket.appendChild(ticketGrid);
        container.appendChild(ticket);
    }
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
