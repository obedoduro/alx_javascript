const request = require('request');
const apiUrl = process.argv[2];


if (!apiUrl) {
    console.log('Usage: node countWedgeAntillesMovies.js <api_url>');
    process.exit(1);
}

const characterId = 18;

request(apiUrl, (error, reponse, body) => {
    if (error) {
        console.log('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        const moviesData = JSON.parse(body).results;


        //Filter the movies where "Wedge Antilles" (charater ID 18) is present
        const wedgeAntillesMovies = moviesData.filter((movie) =>
            movies.characters.includes('https://swapi-api.alx-tools.com/api/people/${characterId}/')
        );
        console.log('Number of movies whwere Wedge Antilles is present: ${wedgeAntillesMovies.length}');
    
    } else {
        console.error('Error: Unable to fetch movie data. Status Code: ${response.statusCode}');
        process.exit(1);
    }
});