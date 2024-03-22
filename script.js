// your code here
// Get the form and the h3 element
        const form = document.getElementById('urlForm');
        const urlElement = document.getElementById('url');

        // Add event listener to the submit button
        document.getElementById('button').addEventListener('click', function() {
            // Get the values from the input fields
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;

            // Construct the query string
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

            // Update the h3 element with the new URL
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });