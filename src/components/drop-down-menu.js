import "./drop-down-menu.css";
import dotSVG from "./dropdown-menu.svg";

export function initDropdownMenu(element) {
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

    const dropdownItem1 = document.createElement("li");
    dropdownItem1.classList.add("dropdown-item");
    dropdownList.appendChild(dropdownItem1);

    const dropdownItem2 = document.createElement("li");
    dropdownItem2.classList.add("dropdown-item");
    dropdownList.appendChild(dropdownItem2);

    const dropdownItem3 = document.createElement("li");
    dropdownItem3.classList.add("dropdown-item");
    dropdownList.appendChild(dropdownItem3);

    dropdownItem1.textContent = "°F";
    dropdownItem2.textContent = "°C)";

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