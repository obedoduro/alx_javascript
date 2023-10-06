const axios = require('axios');

const url = process.argv[2];

if (!url) {
    console.error('Usage: node getStatus.js <URL>');
    process.exit(1);
}

axios.get(url)
    .then(response => {
        const statusCode = response.status;
        console.log('code: ${statusCode}');

    })
    .catch(error => {
        if (error.response) {
            const statusCode = error.response.status;
            console.error('code: ${statusCode}');
        } else {
            console.error('An error occurred: ${error.message}');
        }
    });
  