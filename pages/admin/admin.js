let userCounter = 5;

async function addUser() {
    let username = document.getElementById("username").value;
    let vorname = document.getElementById("vorname").value;
    let nachname = document.getElementById("nachname").value;
    if (username !== "" && vorname !== "" && nachname !== "") {
        // tr
        let rowElem = document.createElement("tr");
        rowElem.id = `tr${userCounter + 1}`;

        // id td
        let idELem = document.createElement("td");
        idELem.innerText = `${userCounter + 1}`;

        rowElem.appendChild(idELem);

        // benutzername td
        let benutzernameELem = document.createElement("td");
        benutzernameELem.innerText = username;

        rowElem.appendChild(benutzernameELem);

        // vorname td
        let vornameELem = document.createElement("td");
        vornameELem.innerText = vorname;

        rowElem.appendChild(vornameELem);

        // nachname td
        let nachnameELem = document.createElement("td");
        nachnameELem.innerText = nachname;

        rowElem.appendChild(nachnameELem);

        // timestamp td
        let erstelltELem = document.createElement("td");

        // Nutzertyp td
        let typElem = document.createElement("td");
        let typSelect = document.createElement("select");
        let defaultUser = document.createElement("option");
        let controllingUser = document.createElement("option");
        let adminUser = document.createElement("option");

        defaultUser.value = "Standard";
        controllingUser.value = "Controlling";
        adminUser.value = "Admin";

        defaultUser.innerText = "Standard";
        controllingUser.innerText = "Controlling";
        adminUser.innerText = "Admin";

        let userType = document.getElementById("userType").value;

        switch (userType) {
            case "controlling":
                controllingUser.setAttribute("selected", "selected");
                break;
            case "admin":
                adminUser.setAttribute("selected", "selected");
                break;
            default:
                defaultUser.setAttribute("selected", "selected");
        }

        typSelect.appendChild(defaultUser);
        typSelect.appendChild(controllingUser);
        typSelect.appendChild(adminUser);

        typElem.appendChild(typSelect);

        rowElem.appendChild(typElem);

        // entfernen td
        let entfernenElem = document.createElement("td");
        let entfernenElemButton = document.createElement("button");
        entfernenElemButton.setAttribute('onclick', `removeEntry(${userCounter + 1})`);
        entfernenElemButton.className = "delete";
        entfernenElemButton.innerText = "X";

        entfernenElem.appendChild(entfernenElemButton);
        rowElem.appendChild(entfernenElem);

        // Reihe der Tabelle anhängen
        document.getElementById("fetchingLDAP").innerText = "Fetching Active Directory user account via LDAPS";
        await new Promise(r => setTimeout(r, 3000));
        document.getElementById("fetchingLDAP").innerText = "";
        document.querySelector("tbody").appendChild(rowElem);
        userCounter++;
    } else {
        console.log("Benutzername, Vorname und Nachname müssen angegeben werden.");
    }
}

function removeEntry(entry) {
    document.getElementById(`tr${entry}`).remove();
}