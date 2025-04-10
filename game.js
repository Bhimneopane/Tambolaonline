let pickedNumbers = [];

function startGame() {
    document.getElementById('statusMessage').innerText = "Ready for the next number...";
    pickNextNumber();
}

function pickNextNumber() {
    setTimeout(() => {
        if (pickedNumbers.length >= 90) {
            document.getElementById('statusMessage').innerText = "Game Over!";
            return;
        }

        let newNumber;
        do {
            newNumber = Math.floor(Math.random() * 90) + 1;
        } while (pickedNumbers.includes(newNumber));

        pickedNumbers.push(newNumber);
        document.getElementById('liveNumber').innerText = newNumber;

        highlightTicketNumbers(newNumber);

        pickNextNumber();
    }, 2000);
}

function highlightTicketNumbers(number) {
    let ticketBoxes = document.querySelectorAll(".number-box");
    ticketBoxes.forEach(box => {
        if (box.innerText == number) {
            box.style.backgroundColor = "green";
            box.style.color = "white";
        }
    });
}
