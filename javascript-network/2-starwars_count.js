const request = require('request');
const apiUrl = process.argv[2];

if (!apiUrl) {
    console.log('Usage: node countWedgeAntillesMovies.js <api_url>');
    process.exit(1);
}

const characterId = 18;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        const moviesData = JSON.parse(body).results;

        // Filter the movies where "Wedge Antilles" (character ID 18) is present
        const wedgeAntillesMovies = moviesData.filter((movie) =>
            movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
        );

        console.log(`${wedgeAntillesMovies.length}`);
    } else {
        console.error(`Error: Unable to fetch movie data. Status Code: ${response.statusCode}`);
        process.exit(1);
    }
});
