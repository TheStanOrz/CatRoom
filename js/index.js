import { fetchCats, fetchBreeds } from "./api.js";
import {
  renderCats,
  renderOptions,
  clearImages,
  addDropdownListener,
  addCloseDropdownListener,
  addSelectOrderListener,
  addLoadMoreButtonListener,
  disableLoadMoreButton,
  enableLoadMoreButton,
  addCloseDrawerListener,
} from "./dom.js";

const catList = [];
let pageSize = 12,
  page = 1,
  order = "DESC",
  selectOptions = [];

async function loadCats(limit, page, order, breedIds = []) {
  const list = await fetchCats(limit, page, order, breedIds);
  catList.push(...list);
  renderCats(list);
  if (list.length < limit) {
    disableLoadMoreButton();
    return false;
  }
  return true;
}
async function handleBreedOptionChange(e) {
  const changeOption = e.target;
  if (changeOption.checked) {
    selectOptions.push(changeOption.value);
  } else {
    selectOptions = selectOptions.filter((item) => item !== changeOption.value);
  }
  clearImages();
  enableLoadMoreButton();
  page = 1;
  const hasNextPage = await loadCats(pageSize, page, order, selectOptions);
  if (hasNextPage) page++;
}
async function loadBreedOptions() {
  const breeds = await fetchBreeds();
  console.log(breeds[0]);
  renderOptions(breeds, handleBreedOptionChange);
}
function addListeners() {
  addDropdownListener();
  addCloseDropdownListener();
  addCloseDrawerListener();
  addSelectOrderListener(async (e) => {
    order = e.target.value;
    clearImages();
    enableLoadMoreButton();
    page = 1;
    const hasNextPage = await loadCats(pageSize, page, order, selectOptions);
    if (hasNextPage) page++;
  });
  addLoadMoreButtonListener(async () => {
    const hasNextPage = await loadCats(pageSize, page, order, selectOptions);
    if (hasNextPage) page++;
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  const hasNextPage = await loadCats(pageSize, page, order, selectOptions);
  if (hasNextPage) page++;
  loadBreedOptions();
  addListeners();
});
