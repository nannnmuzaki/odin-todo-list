export function Contact() {
    const contactTab = document.createElement("div");
    contactTab.className = "contact-tab";

    const odinite = document.createElement("h1");
    odinite.textContent = "odinite";
    odinite.className = "odinite";

    contactTab.appendChild(odinite);

    const odinContact = document.createElement("span");
    odinContact.textContent = "Contact";
    odinContact.className = "odin-contact";

    odinite.appendChild(odinContact);

    const separator = document.createElement("hr");
    separator.className = "contact-separator";

    contactTab.appendChild(separator);

    const contactWrapper = document.createElement("div");
    contactWrapper.className = "contact-wrapper";

    contactTab.appendChild(contactWrapper);

    const emailWrapper = document.createElement("div");
    emailWrapper.appendChild(document.createElement("h2")).textContent =
        "Email";

    const phoneWrapper = document.createElement("div");
    phoneWrapper.appendChild(document.createElement("h2")).textContent =
        "Phone";

    contactWrapper.appendChild(emailWrapper);
    contactWrapper.appendChild(phoneWrapper);

    emailWrapper.appendChild(document.createElement("span")).textContent =
        "odinite@odin.com";

    phoneWrapper.appendChild(document.createElement("span")).textContent =
        "+123 456 789";

    const locationWrapper = document.createElement("div");
    locationWrapper.className = "location-wrapper";
    locationWrapper.appendChild(document.createElement("h2")).textContent =
        "Location";

    const location = document.createElement("div");
    location.className = "odinite-location";
    location.appendChild(document.createElement("span")).textContent =
        "Odinite Street, Odin";
    location.appendChild(document.createElement("span")).textContent =
        "Open Everyday | 08:00 - 23:00";

    locationWrapper.appendChild(location);

    contactTab.appendChild(locationWrapper);

    return contactTab;
}
