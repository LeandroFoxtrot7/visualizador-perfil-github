import { handleSearch } from "./controllers/searchController.js";

const inputSearch = document.getElementById("input-search");
const btnSearch = document.getElementById("btn-search");
const profileResults = document.querySelector(".profile-results");

btnSearch.addEventListener("click", () => {
    const userName = inputSearch.value;
    handleSearch(userName, profileResults);
});


