const countryImageDiv = document.getElementById("country-pic");
const updateCountryImage = (country) => {
  console.log(countryImageDiv);
  countryImageDiv.src = `assets/${country}_outline.gif`;
};

const countries = document
  .getElementById("country-list")
  .getElementsByTagName("li");

for (let country of countries) {
  country.addEventListener("mouseenter", () => {
    updateCountryImage(country.innerText.toLowerCase());
    for(let item of countries) {
      if (item.innerText === country.innerText) {
        item.classList = "active"
        console.log("applied to "+ country.innerText)
      } else {
        console.log("cleared "+ country.innerText)
        item.classList = ""
      }
    };
  });
}



const getCountryInfo = async (country) => {
  const countryInfo = await fetch(
    `https://restcountries.eu/rest/v2/name/${country}`
  ).then((response) => response.json());
  console.log(countryInfo[0]);
};

getCountryInfo("cuba");
