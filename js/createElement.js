export function createCard(item) {
  const card = document.createElement("div");
  card.className = "card";

  //create img
  const img = document.createElement("img");
  img.src = item.url;
  img.className = "card-img";
  //create breeds
  const breeds = document.createElement("p");
  breeds.innerHTML = item.breeds.map((breed) => breed.name).join(", ");
  card.appendChild(img);
  card.appendChild(breeds);
  return card;
}
export function createBreedOption(breed, handleBreedOptionChange) {
  const option = document.createElement("div");
  option.classList.add("dropdown-options-option");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = breed.id;
  checkbox.addEventListener("change", handleBreedOptionChange);
  const label = document.createElement("label");
  label.classList.add("dropdown-label");
  label.innerHTML = breed.name;
  const br = document.createElement("br");
  option.appendChild(checkbox);
  option.appendChild(label);
  option.appendChild(br);
  return option;
}
export function createTempItem(temperament) {
  const tempItem = document.createElement("span");
  tempItem.className = "drawer-personality-tags-tag";
  tempItem.innerHTML = temperament;
  return tempItem;
}
export function createDrawerStatsItem(displayName, score) {
  const statsItem = document.createElement("div");
  statsItem.className = "drawer-stats-item";
  const itemTitle = document.createElement("span");
  itemTitle.className = "drawer-stats-item-title";
  itemTitle.innerHTML = `${displayName}:`;
  const bar = document.createElement("div");
  bar.className = "drawer-stats-item-bar";
  const fill = document.createElement("div");
  fill.className = "drawer-stats-item-bar-fill";
  fill.style.width = `${score * 20}%`;
  bar.appendChild(fill);
  statsItem.appendChild(itemTitle);
  statsItem.appendChild(bar);
  return statsItem;
}
