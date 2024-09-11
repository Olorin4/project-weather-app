import "./drop-down-menu.css";
import dotSVG from "./dropdown-menu.svg";

export function initDropdownMenu(element) {
    const dropdown = document.createElement("div");
    const dropdownButton = document.createElement("button");
    const dropdownIcon = document.createElement("img");
    const dropdownList = document.createElement("ul");
    const dropdownItem1 = document.createElement("li");
    const dropdownItem2 = document.createElement("li");
    const dropdownItem3 = document.createElement("li");
    element.appendChild(dropdown);
    dropdown.appendChild(dropdownButton);
    dropdownButton.appendChild(dropdownIcon);
    dropdown.appendChild(dropdownList);
    dropdownList.appendChild(dropdownItem1);
    dropdownList.appendChild(dropdownItem2);
    dropdownList.appendChild(dropdownItem3);
    dropdown.classList.add("dropdown");
    dropdownButton.classList.add("dropdown-button");
    dropdownIcon.classList.add("dropdown-icon");
    dropdownList.classList.add("dropdown-list");
    dropdownItem1.classList.add("dropdown-item");
    dropdownItem2.classList.add("dropdown-item");
    dropdownItem3.classList.add("dropdown-item");
    dropdownIcon.src = dotSVG;
    dropdownIcon.alt = "drop down menu";
    dropdownButton.textContent = dropdownItem1.textContent = "US (°F. miles";
    dropdownItem2.textContent = "EU (°C, km ";
    dropdownItem3.textContent = "UK (°C, miles";
}
