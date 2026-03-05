import odinIconSvg from "../../assets/odin-icon.svg";

export function NavHeader(navLinks) {
    if (!Array.isArray(navLinks)) {
        throw new Error("NavHeader argument must be an array of string");
    }

    const isAllStrings = navLinks.every((item) => typeof item === "string");

    if (!isAllStrings) {
        throw new Error("NavHeader argument must be an array of string");
    }

    const header = document.createElement("header");
    const iconWrapper = document.createElement("div");
    const nav = document.createElement("nav");

    iconWrapper.className = "icon-wrapper";
    iconWrapper.innerHTML = odinIconSvg;

    header.appendChild(iconWrapper);
    header.appendChild(nav);

    navLinks.forEach((item) => {
        const navItem = document.createElement("button");
        navItem.setAttribute("data-tab", item.toLowerCase());
        navItem.textContent = item;
        nav.appendChild(navItem);
    });
    return header;
}
