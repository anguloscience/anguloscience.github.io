

const apiKey = "MfheMJM8lT3_7Hc3hCaly27eeSnxCh2RyRe_YSSJFEU";

const formElement = document.querySelector("form");
const searchInputElement = document.getElementById("search-input");
const searchResultsElement = document.querySelector(".search-results");
const showMoreButtonElement = document.getElementById("show-more-button");

let inputData = "";
let page = 1;
async function searchImages() {
   inputData = searchInputElement.value;
   const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;

   const response = await fetch(url);
   const data = await response.json();
   if (page === 1) {
      searchInputElement.innerHTML = "";
   }

   

   const results = data.results;
   results.map((result) => {
      const imageWrapper = document.createElement("div");
      imageWrapper.classList.add("result");
      const image = document.createElement("img");
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement("a");
      imageLink.href = result.links.html;
      imageLink.target = "_blank";
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResultsElement.appendChild(imageWrapper);
   });
   page++;
   if (page > 1) {
      showMoreButtonElement.style.display = "block";
   }
}

formElement.addEventListener("submit", (event) => {
   event.preventDefault();
   page = 1;
   searchImages();
});

showMoreButtonElement.addEventListener("click", () => {
   searchImages();
});
