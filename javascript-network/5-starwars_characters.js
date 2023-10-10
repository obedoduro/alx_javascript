const request = require('request');

// Get the movie ID from the command-line argument
const movieId = process.argv[2];

if (!movieId) {
    console.log('Usage: node starWarsCharacters.js <movie_id>');
    process.exit(1);
}

// Define the Star Wars API URL for movies
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        // Parse the JSON response
        const movieData = JSON.parse(body);

        // Display characters one by one
        console.log(`Characters in ${movieData.title}:`);
        movieData.characters.forEach((characterUrl) => {
            // Send a GET request to the character URL
            request(characterUrl, (charError, charResponse, charBody) => {
                if (charError) {
                    console.error('Error:', charError);
                } else if (charResponse.statusCode === 200) {
                    // Parse the character JSON response
                    const characterData = JSON.parse(charBody);
                    console.log(characterData.name);
                } else {
                    console.error(`Error: Unable to fetch character data. Status Code: ${charResponse.statusCode}`);
                }
            });
        });
    } else {
        console.error(`Error: Unable to fetch movie data. Status Code: ${response.statusCode}`);
        process.exit(1);
    }
});
