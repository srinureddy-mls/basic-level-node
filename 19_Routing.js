const express = require('express');
const app = express();
// Route for the homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});
// Route for the about page
app.get('/about', (req, res) => {
  res.send('About us page');
});
// Route for the contact page
app.get('/contact', (req, res) => {
  res.send('Contact us page');
});
// Route for handling 404 page not found
app.use((req, res) => {
  res.status(404).send('404 Page Not Found');
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
