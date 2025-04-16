function renderStockwerk(stockwerk) {
    console.log(stockwerk);
    // TODO: Räume individuell an Stockwerk anpassen
}

function raumBuchen(button) {
    if (localStorage.getItem(button) == null) {
        localStorage.setItem(button, "gebucht");
        raum101.innerHTML = '<p>gebucht</p><button id="buttonRaum1" onclick="buchungEntfernen(this.id)">Buchung entfernen</button>';
    }
}

function buchungEntfernen(button) {
    if (localStorage.getItem(button) != null) {
        localStorage.removeItem(button);
        raum101.innerHTML = '<button id="buttonRaum1" onclick="raumBuchen(this.id)">Buchen</button>';
    }
}

let date = new Date();
let timer = document.getElementById("timestampParagraph");

let raum101 = document.getElementById("raum1Status");

console.log(raum101.id);

if (localStorage.getItem(raum101.children[0].id) === "gebucht") {
    raum101.innerHTML = '<p>gebucht</p><button id="buttonRaum1" onclick="buchungEntfernen(this.id)">Buchung entfernen</button>';
}

// raum101.innerHTML = localStorage.getItem("testString");

timer.innerText = date.toLocaleDateString();
