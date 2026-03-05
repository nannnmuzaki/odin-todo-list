export function Menu() {
    const menuTab = document.createElement("div");
    menuTab.className = "menu-tab";

    const odinite = document.createElement("h1");
    odinite.textContent = "odinite";
    odinite.className = "odinite";

    menuTab.appendChild(odinite);

    const odinMenu = document.createElement("span");
    odinMenu.textContent = "Menu";
    odinMenu.className = "odin-menu";

    odinite.appendChild(odinMenu);

    const separator = document.createElement("hr");
    separator.className = "menu-separator";

    menuTab.appendChild(separator);

    const menuList = [
        // Food
        { name: "Fried Rice", price: "$10", type: "food" },
        { name: "Roasted Boar", price: "$18", type: "food" },
        { name: "Smoked Salmon", price: "$15", type: "food" },
        { name: "Nordic Meatballs", price: "$14", type: "food" },
        { name: "Valhalla Stew", price: "$12", type: "food" },
        { name: "Dragonbone Steak", price: "$24", type: "food" },
        { name: "Frost Giant's Ribs", price: "$22", type: "food" },
        { name: "Seafaring Catch", price: "$16", type: "food" },
        { name: "Odin's Feast Platter", price: "$35", type: "food" },
        { name: "Rune-Carved Bread", price: "$6", type: "food" },

        // Beverages
        { name: "Honey Mead", price: "$8", type: "beverage" },
        { name: "Nordic Ale", price: "$7", type: "beverage" },
        { name: "Black Coffee", price: "$4", type: "beverage" },
        { name: "Thunder Brew", price: "$10", type: "beverage" },
        { name: "Yggdrasil Sap Water", price: "$3", type: "beverage" },
        { name: "Crimson Wine", price: "$9", type: "beverage" },
        { name: "Glacier Ice Tea", price: "$5", type: "beverage" },
        { name: "Sweetened Goat's Milk", price: "$4", type: "beverage" },
        { name: "Berserker's Draught", price: "$11", type: "beverage" },
        { name: "Valkyrie's Tears", price: "$12", type: "beverage" },
    ];

    const menuWrapper = document.createElement("div");
    menuWrapper.className = "menu-wrapper";

    menuTab.appendChild(menuWrapper);

    const menuFood = document.createElement("div");
    menuFood.className = "menu-food";

    const foodHeader = document.createElement("h2");
    foodHeader.textContent = "Food";

    menuFood.appendChild(foodHeader);

    const menuBeverage = document.createElement("div");
    menuBeverage.className = "menu-beverage";

    const beverageHeader = document.createElement("h2");
    beverageHeader.textContent = "Beverage";

    menuBeverage.appendChild(beverageHeader);

    menuWrapper.appendChild(menuFood);
    menuWrapper.appendChild(menuBeverage);

    menuList.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";

        const menuName = document.createElement("span");
        menuName.className = "menu-name";
        menuName.textContent = item.name;

        const menuPrice = document.createElement("span");
        menuPrice.className = "menu-price";
        menuPrice.textContent = item.price;

        menuItem.appendChild(menuName);
        menuItem.appendChild(menuPrice);

        if (item.type === "food") {
            menuFood.appendChild(menuItem);
        } else if (item.type === "beverage") {
            menuBeverage.appendChild(menuItem);
        } else {
            throw new Error("menu item must be a valid type");
        }
    });

    return menuTab;
}
