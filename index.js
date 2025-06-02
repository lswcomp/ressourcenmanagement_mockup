const indexedDB = window.indexedDB;

const request = indexedDB.open("Buchungen", 1);

request.onerror = function (event) {
    console.error(event);
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("buchungen", { keyPath: "id" });
    store.createIndex("item", ["item"], { unique: false });
    store.createIndex("tag", ["tag"], { unique: false });
    store.createIndex("zeitstempel", ["zeitstempel"], { unique: true });
};

request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("buchungen", "readwrite");

    const store = transaction.objectStore("buchungen");
    const itemIndex = store.index("item");

    store.put({ item: "Tisch 1", tag: "02.06.2025", zeitstempel: "17:26:00"});

    const query = store.getAll(itemIndex);

    console.log(query.result);
}

function toggleMenu() {
    console.log("toggling menu");
}
