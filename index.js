function initialPageLoad() {
    console.log("TODO");
}

function renderTime(element) {
    let date = new Date();
    element.innerHTML = date.toLocaleTimeString() + " " + date.toLocaleDateString();
}

let timer = document.getElementById("timestampParagraph");

renderTime(timer);
setInterval(renderTime, 1000, timer);
