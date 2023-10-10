const request = require('request');
const movieId = process.argv[2];

if (!movieId) {
    console.log('Usage: node getMovieTitle.js <movie_id>');
    process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        const movieData = JSON.parse(body);
        console.log(`Movie Title: ${movieData.title}`);
    } else {
        console.error(`Error: Unable to fetch movie data. Status Code: ${response.statusCode}`);
        process.exit(1);
    }
});
