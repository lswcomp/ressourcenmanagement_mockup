const testIndexedDB = window.indexedDB;

const testRequest = indexedDB.open("Buchungen", 1);

request.onerror = function (event) {
    console.error(event);
};

request.onupgradeneeded = function () {
    const db = request.result;
    const store = db.createObjectStore("buchungen", { keyPath: "id" });
    store.createIndex("nutzer", ["nutzer"], { unique: true });
    store.createIndex("standort", ["standort"], { unique: true });
    store.createIndex("stockwerk", ["stockwerk"], { unique: true });
    store.createIndex("item", ["item"], { unique: false });
    store.createIndex("tag", ["tag"], { unique: false });
    store.createIndex("zeitstempel", ["zeitstempel"], { unique: true });
};

request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("buchungen", "readwrite");

    const store = transaction.objectStore("buchungen");

    store.put({ id: 1, nutzer: "Moritz Groß", standort: "Hamburg", stockwerk: "5.OG", item: "Tisch 110", tag: "02.06.2025", zeitstempel: "06:26:00"});
    store.put({ id: 2, nutzer: "Angelika Repp", standort: "Berlin", stockwerk: "12.OG", item: "Tisch 22", tag: "02.06.2025", zeitstempel: "06:55:00"});
    store.put({ id: 3, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "3.OG", item: "Tisch 2", tag: "02.06.2025", zeitstempel: "07:10:00"});
    store.put({ id: 4, nutzer: "Lukas Wala", standort: "München", stockwerk: "1.OG", item: "Tisch 48", tag: "02.06.2025", zeitstempel: "08:26:00"});
    store.put({ id: 5, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "3.OG", item: "Tisch 2", tag: "03.06.2025", zeitstempel: "06:45:00"});
    store.put({ id: 6, nutzer: "Angelika Repp", standort: "Berlin", stockwerk: "12.OG", item: "Tisch 25", tag: "04.06.2025", zeitstempel: "07:32:00"});
    store.put({ id: 7, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "3.OG", item: "Tisch 2", tag: "04.06.2025", zeitstempel: "07:50:00"});
    store.put({ id: 8, nutzer: "Lukas Wala", standort: "München", stockwerk: "1.OG", item: "Tisch 33", tag: "05.06.2025", zeitstempel: "07:12:00"});
    store.put({ id: 9, nutzer: "Angelika Repp", standort: "Hamburg", stockwerk: "13.OG", item: "Tisch 25", tag: "05.06.2025", zeitstempel: "07:29:00"});
    store.put({ id: 10, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "4.OG", item: "Tisch 10", tag: "05.06.2025", zeitstempel: "08:03:00"});
    store.put({ id: 11, nutzer: "Moritz Groß", standort: "Hamburg", stockwerk: "5.OG", item: "Tisch 110", tag: "06.06.2025", zeitstempel: "06:49:00"});
    store.put({ id: 12, nutzer: "Moritz Groß", standort: "Hamburg", stockwerk: "5.OG", item: "Tisch 112", tag: "07.06.2025", zeitstempel: "06:45:00"});
    store.put({ id: 13, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "4.OG", item: "Tisch 6", tag: "07.06.2025", zeitstempel: "07:31:00"});
    store.put({ id: 14, nutzer: "Simon Grewe", standort: "Frankfurt", stockwerk: "3.OG", item: "Tisch 6", tag: "08.06.2025", zeitstempel: "07:16:00"});
    store.put({ id: 15, nutzer: "Lukas Wala", standort: "München", stockwerk: "1.OG", item: "Tisch 65", tag: "08.06.2025", zeitstempel: "07:57:00"});
    store.put({ id: 16, nutzer: "Angelika Repp", standort: "Berlin", stockwerk: "12.OG", item: "Tisch 22", tag: "08.06.2025", zeitstempel: "08:00:00"});
    store.put({ id: 17, nutzer: "Angelika Repp", standort: "Berlin", stockwerk: "12.OG", item: "Tisch 22", tag: "09.06.2025", zeitstempel: "07:48:00"});
    store.put({ id: 18, nutzer: "Moritz Groß", standort: "Hamburg", stockwerk: "5.OG", item: "Tisch 112", tag: "12.06.2025", zeitstempel: "06:50:00"});
    store.put({ id: 19, nutzer: "Lukas Wala", standort: "München", stockwerk: "1.OG", item: "Tisch 65", tag: "12.06.2025", zeitstempel: "08:54:00"});

    transaction.oncomplete = function () {
        db.close();
    }
};