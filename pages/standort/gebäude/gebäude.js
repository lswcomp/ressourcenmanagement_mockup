function renderStockwerk(stockwerk) {
    console.log(stockwerk);
    // TODO: Räume individuell an Stockwerk anpassen
}

function raumBuchen(button) {
    if (localStorage.getItem(button) == null) {
        localStorage.setItem(button, "gebucht");
    }
}

let date = new Date();
let timer = document.getElementById("timestampParagraph");

let raum101 = document.getElementById("raum1Status");

console.log(raum101.id);

if (localStorage.getItem(raum101.id) === "gebucht") {
    console.log("bdsfha");
    raum101.innerHTML = "<p>gebucht</p>";
}

// raum101.innerHTML = localStorage.getItem("testString");

timer.innerText = date.toLocaleDateString();
