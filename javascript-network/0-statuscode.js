const request = require('request');

// Get the URL from the command-line argument
const url = process.argv[2];

if (!url) {
    console.log('Usage: node getStatusCode.js <url>');
    process.exit(1);
}

// Send a GET request to the specified URL
request(url, (error, response) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    // Display the status code
    console.log(`code: ${response.statusCode}`);
});
