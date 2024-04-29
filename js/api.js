const apiKey =
  "live_ILrKKkhYi19ogc6SkdT4g5vnR68KNJhPVOI8QTRQiE2mNjSQBD31sXw59wbBHLeh";

export function fetchCats(limit, page, order, breedIds = []) {
  const url = new URL("https://api.thecatapi.com/v1/images/search");
  url.searchParams.append("limit", limit);
  url.searchParams.append("has_breeds", 1);
  url.searchParams.append("order", order);
  url.searchParams.append("page", page);
  url.searchParams.append("api_key", apiKey);
  if (breedIds.length > 0) {
    url.searchParams.append("breed_ids", breedIds.join(","));
  }
  return fetch(url).then((res) => res.json());
}

export function fetchBreeds() {
  return fetch("https://api.thecatapi.com/v1/breeds").then((res) => res.json());
}
