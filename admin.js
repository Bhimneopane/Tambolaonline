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
        let positionMatrix = generateBlankPositions();

        for (let row = 0; row < 3; row++) {
            let rowDiv = document.createElement('div');
            rowDiv.className = 'ticket-row';

            for (let col = 0; col < 9; col++) {
                let box = document.createElement('div');
                box.className = 'number-box';

                if (positionMatrix[row].includes(col)) {
                    box.innerText = numbers.pop(); // Assign a number from the list
                } else {
                    box.innerText = ""; // Empty space
                    box.classList.add('empty-box');
                }

                rowDiv.appendChild(box);
            }

            ticketGrid.appendChild(rowDiv);
        }

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
    return numbers.sort((a, b) => a - b); // Sorted for better readability
}

function generateBlankPositions() {
    let rows = [];

    for (let i = 0; i < 3; i++) {
        let positions = [];
        while (positions.length < 5) {
            let pos = Math.floor(Math.random() * 9);
            if (!positions.includes(pos)) {
                positions.push(pos);
            }
        }
        rows.push(positions);
    }

    return rows;
}
