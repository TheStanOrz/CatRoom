import {
  createCard,
  createDrawerStatsItem,
  createTempItem,
} from "./createElement.js";
import { createBreedOption } from "./createElement.js";
export function renderCats(catList) {
  const columns = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3"),
  ];
  for (let i = 0; i < catList.length; i++) {
    const col = i % columns.length;
    const item = catList[i];
    const card = createCard(item);
    card.addEventListener("click", (e) => {
      setDrawerContent(item);
      openDrawer();
    });
    columns[col].appendChild(card);
  }
}
export function openDrawer() {
  const drawer = document.getElementById("drawer");
  drawer.classList.add("open");
}
export function setDrawerContent(item) {
  const drawerImg = document.getElementById("drawer-img");
  drawerImg.src = item.url;
  const breedName = document.getElementById("drawer-name");
  breedName.innerHTML = item.breeds[0].name;
  const origin = document.getElementById("drawer-origin");
  origin.innerHTML = item.breeds[0].origin;
  const lifeSpan = document.getElementById("drawer-number");
  lifeSpan.innerHTML = item.breeds[0].weight.metric;
  const temperament = document.getElementById("temperament");
  temperament.innerHTML = "";
  const temperamentList = item.breeds[0].temperament.split(",");
  for (const temp of temperamentList) {
    const tempItem = createTempItem(temp);
    temperament.appendChild(tempItem);
  }
  const scoreListings = [
    {
      key: "intelligence",
      displayName: "智力",
    },
    {
      key: "affection_level",
      displayName: "親密度",
    },
    {
      key: "energy_level",
      displayName: "活力",
    },
    {
      key: "child_friendly",
      displayName: "兒童友善",
    },
    {
      key: "dog_friendly",
      displayName: "親近狗狗",
    },
    {
      key: "indoor",
      displayName: "喜歡在家",
    },
    {
      key: "health_issues",
      displayName: "遺傳疾病",
    },
    {
      key: "shedding_level",
      displayName: "掉毛量",
    },
    {
      key: "social_needs",
      displayName: "社交需求",
    },
    {
      key: "stranger_friendly",
      displayName: "陌生人友善",
    },
    {
      key: "rare",
      displayName: "稀有度",
    },
  ];
  const drawerStats = document.getElementById("drawer-stats");
  drawerStats.innerHTML = "";
  for (const { key, displayName } of scoreListings) {
    const statsItem = createDrawerStatsItem(displayName, item.breeds[0][key]);
    drawerStats.appendChild(statsItem);
  }
}
export function addDropdownListener() {
  const dropdownButton = document.getElementById("dropdown-button");
  const options = document.getElementById("dropdown-options");
  dropdownButton.addEventListener("click", () => {
    options.classList.toggle("hidden");
  });
}
export function addCloseDropdownListener() {
  document.addEventListener("click", (e) => {
    const dropdownButton = document.getElementById("dropdown-button");
    const options = document.getElementById("dropdown-options");
    const isClickedInsideOptions = options.contains(e.target);
    const isClickedInsideDropdownButton = dropdownButton.contains(e.target);
    if (!isClickedInsideOptions && !isClickedInsideDropdownButton)
      options.classList.add("hidden");
  });
}
export function renderOptions(breeds, handleBreedOptionChange) {
  const optionsContainer = document.getElementById("dropdown-options");
  optionsContainer.innerHTML = "";
  breeds.forEach((breed) => {
    const option = createBreedOption(breed, handleBreedOptionChange);
    optionsContainer.appendChild(option);
  });
}
export function clearImages() {
  const columns = [
    document.getElementById("col1"),
    document.getElementById("col2"),
    document.getElementById("col3"),
  ];
  columns.forEach((column) => {
    column.innerHTML = "";
  });
}
export function addSelectOrderListener(handler) {
  const orderSelect = document.getElementById("order-select");
  orderSelect.addEventListener("change", handler);
}
export function addLoadMoreButtonListener(handler) {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.addEventListener("click", handler);
}
export function disableLoadMoreButton() {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.disabled = true;
}
export function enableLoadMoreButton() {
  const loadMoreButton = document.getElementById("load-more");
  loadMoreButton.disabled = false;
}
export function addCloseDrawerListener() {
  document.addEventListener("click", (e) => {
    const drawer = document.getElementById("drawer");
    const isClickedInsideCard = e.target.closest(".card");
    const isClickedInsideDrawer = drawer.contains(e.target);
    if (!isClickedInsideCard && !isClickedInsideDrawer) {
      drawer.classList.remove("open");
    }
  });
}
