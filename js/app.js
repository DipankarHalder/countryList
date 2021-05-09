let itemCountry = document.getElementById('allCountries');

async function fetchCountry(pageNo) {
    let listCountry;
    const apiPath = `https://jsonmock.hackerrank.com/api/countries?page=${pageNo}`;
    try {
        const response = await fetch(apiPath);
        const countries = await response.json();
        countries.data.map(item => 
            listCountry += 
            `<li>
                <h3>${item.name}</h3>
                <p>${item.nativeName}</p>
                <p>${item.capital}</p>
                <p>${item.region}</p>
            </li>`
        );
        itemCountry.innerHTML = listCountry;
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

fetchCountry(11);