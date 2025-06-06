function createHoverText(element) {
    elem = document.getElementById(element);
    elem.className == 'rotSenkrecht' ? elem.innerHTML = '<p class="inter-bold">Buchung entfernen</p>' : elem.innerHTML = '<p class="inter-bold">Buchen</p>';
}

function createHoverTextW(element) {
    elem = document.getElementById(element);
    elem.className == 'rotWaagrecht' ? elem.innerHTML = '<p class="inter-bold">Buchung entfernen</p>' : elem.innerHTML = '<p class="inter-bold">Buchen</p>';
}

function createHoverTextK(element) {
    elem = document.getElementById(element);
    elem.className == 'konferenzTischrot' ? elem.innerHTML = '<p class="inter-bold">Buchung entfernen</p>' : elem.innerHTML = '<p class="inter-bold">Buchen</p>';
}

function deleteHoverText(element) {
    document.getElementById(element).innerHTML = '';
}

function swapColor(element) {
    elem = document.getElementById(element);
    elem.className == 'rotSenkrecht' ? elem.className = 'gruenSenkrecht' : elem.className = 'rotSenkrecht';
    createHoverText(element);
}

function swapColorW(element) {
    elem = document.getElementById(element);
    elem.className == 'rotWaagrecht' ? elem.className = 'gruenWaagrecht' : elem.className = 'rotWaagrecht';
    createHoverTextW(element);
}

function swapColorK(element) {
    elem = document.getElementById(element);
    elem.className == 'konferenzTischrot' ? elem.className = 'konferenzTischgruen' : elem.className = 'konferenzTischrot';
    createHoverTextK(element);
}
