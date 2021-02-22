const countryImageDiv = document.getElementById("country-pic");
const updateCountryImage = (country) => {
  console.log(countryImageDiv);
  countryImageDiv.src = `assets/${country}_outline.gif`;
};

const countries = document
  .getElementById("country-list")
  .getElementsByTagName("li");
//const countries = $("#country-list").map((a) =>
console.log(countries);

for (let country of countries) {
  country.addEventListener("mouseenter", () => {
    console.log("HOVER");
    console.log(country.innerText);
    updateCountryImage(country.innerText.toLowerCase());
  });
}
