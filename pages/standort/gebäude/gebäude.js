function renderStockwerk(stockwerk) {
    console.log(stockwerk);
    // TODO: Räume individuell an Stockwerk anpassen
}

let date = new Date();
let timer = document.getElementById("timestampParagraph");

timer.innerText = date.toLocaleDateString();
