const request = require('request');
const fs = require('fs');

// Get the URL and file path from command-line arguments
const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
    console.log('Usage: node fetchAndStore.js <url> <file_path>');
    process.exit(1);
}

// Send a GET request to the specified URL
request(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        // Write the response body to the specified file path
        fs.writeFileSync(filePath, body, { encoding: 'utf-8' });
        
    } else {
        console.error(`Error: Unable to fetch data from ${url}. Status Code: ${response.statusCode}`);
        process.exit(1);
    }
});
