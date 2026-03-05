import { NavHeader } from "../ui/nav-header.js";
import { Footer } from "../ui/footer.js";
import { Home } from "../tabs/home.js";
import { Menu } from "../tabs/menu.js";
import { Contact } from "../tabs/contact.js";

export function initializeLayout() {
    const navLinks = ["Home", "Menu", "Contact"];
    const body = document.querySelector("#content");
    const navHeader = NavHeader(navLinks);
    const main = document.createElement("main");
    const footer = Footer();

    const homeTab = Home();
    const menuTab = Menu();
    const contactTab = Contact();

    const defaultBtn = navHeader.querySelector('button[data-tab="home"]');
    if (defaultBtn) {
        defaultBtn.classList.add("active");
    }

    navHeader.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return;

        const allButtons = navHeader.querySelectorAll("button");
        allButtons.forEach((btn) => btn.classList.remove("active"));

        e.target.classList.add("active");

        const targetTab = e.target.getAttribute("data-tab");

        if (targetTab === "home") main.replaceChildren(homeTab);
        if (targetTab === "menu") main.replaceChildren(menuTab);
        if (targetTab === "contact") main.replaceChildren(contactTab);
    });

    body.appendChild(navHeader);
    body.appendChild(main);
    main.replaceChildren(homeTab);
    body.appendChild(footer);
}
