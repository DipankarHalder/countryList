async function fetchCountry(pageNo) {
    const apiPath = `https://jsonmock.hackerrank.com/api/countries?page=${pageNo}`;
    try {
        const response = await fetch(apiPath);
        const countries = await response.json();
        console.log(countries);
    } catch (error) {
        console.log('Fetch error: ', error);
    }
}

fetchCountry(1);