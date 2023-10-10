const request = require('request');

// Define the API URL
const apiUrl = process.argv[2] || 'https://jsonplaceholder.typicode.com/todos';

// Send a GET request to the API URL
request(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error:', error);
        process.exit(1);
    }

    if (response.statusCode === 200) {
        // Parse the JSON response
        const todos = JSON.parse(body);

        // Create an object to store completed task counts by user ID
        const completedTasksByUser = {};
        let count = 0;

        // Loop through the todos to count completed tasks
        todos.forEach((todo) => {
            if (todo.completed) {
                if (!completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId] = 1;
                } else {
                    completedTasksByUser[todo.userId]++;
                }
            }
        });
        //print all users
        console.log(completedTasksByUser);

    }
    
});
