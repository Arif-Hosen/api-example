const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(countries);
    //     console.log(countries.name);
    // }

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {

        const div = document.createElement('div');
        div.classList = 'country';

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // div.appendChild(p);

        //same as comment part. Its performance better than commnt part
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);

    })

}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetails(data[0]))
    console.log(url);
}

const displayCountryDetails = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML = `
    <h3 >${country.name}</h3>
    <p>Area: ${country.area}</p>
    <p>Population: ${country.population}</p>
    <img width="250 px" src="${country.flag}">
    `

}