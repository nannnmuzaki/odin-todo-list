export function Home() {
    const heroBanner = document.createElement("div");
    heroBanner.className = "hero-banner";

    const odinite = document.createElement("h1");
    odinite.textContent = "odinite";
    odinite.className = "odinite";

    heroBanner.appendChild(odinite);

    const restaurant = document.createElement("span");
    restaurant.textContent = "Restaurant";
    restaurant.className = "restaurant";

    odinite.appendChild(restaurant);

    const separator = document.createElement("hr");
    separator.className = "homepage-separator";

    heroBanner.appendChild(separator);

    const tagline = document.createElement("p");
    tagline.textContent = `"Where odinite get their food."`;
    tagline.className = "tagline";

    heroBanner.appendChild(tagline);

    const seeMenuBtn = document.createElement("button");
    seeMenuBtn.textContent = "See Menu";
    seeMenuBtn.className = "see-menu-btn";

    heroBanner.appendChild(seeMenuBtn);

    const info = document.createElement("span");
    info.textContent = "• Open Everyday 08:00 - 23:00 | Odinite Street, Odin";
    info.className = "info";

    heroBanner.appendChild(info);

    return heroBanner;
}
