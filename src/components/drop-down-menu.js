import "./drop-down-menu.css";
import dotSVG from "./dropdown-menu.svg";

export function initDropdownMenu(element, updateTemperatures) {
    const dropdown = document.createElement("div");
    dropdown.classList.add("dropdown");
    element.appendChild(dropdown);

    const header = document.createElement("span");
    header.textContent = "°F / °C)";
    dropdown.appendChild(header);

    const dropdownButton = document.createElement("button");
    dropdownButton.classList.add("dropdown-button");
    dropdown.appendChild(dropdownButton);

    const dropdownIcon = document.createElement("img");
    dropdownIcon.classList.add("dropdown-icon");
    dropdownIcon.src = dotSVG;
    dropdownIcon.alt = "drop down menu";
    dropdownButton.appendChild(dropdownIcon);

    const dropdownList = document.createElement("ul");
    dropdownList.classList.add("dropdown-list");
    dropdown.appendChild(dropdownList);

    const dropdownItemFahrenheit = document.createElement("li");
    dropdownItemFahrenheit.classList.add("dropdown-item");
    dropdownList.appendChild(dropdownItemFahrenheit);

    const dropdownItemCelsius = document.createElement("li");
    dropdownItemCelsius.classList.add("dropdown-item");
    dropdownList.appendChild(dropdownItemCelsius);

    dropdownItemFahrenheit.textContent = "°F";
    dropdownItemCelsius.textContent = "°C)";

    // Convert to Fahrenheit on click
    dropdownItemFahrenheit.addEventListener("click", function () {
        updateTemperatures("F");
        dropdownList.classList.remove("visible");
    });

    // Convert to Celsius on click
    dropdownItemCelsius.addEventListener("click", function () {
        updateTemperatures("C");
        dropdownList.classList.remove("visible");
    });

    // Toggle dropdown visibility
    dropdownButton.addEventListener("click", function () {
        dropdownList.classList.toggle("visible");
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", function (event) {
        if (!dropdownButton.contains(event.target) && !dropdownList.contains(event.target)) {
            if (dropdownList.classList.contains("visible")) {
                dropdownList.classList.remove("visible");
            }
        }
    });
}
