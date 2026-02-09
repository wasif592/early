const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

// Central data for the school
const schoolInfo = {
    schoolName: "Early Learning High School",
    principal: "Kashaf Ahmed",
    // This will automatically update to 2026, 2027, etc.
    year: new Date().getFullYear() 
};

app.get('/', (req, res) => res.render('home', schoolInfo));
app.get('/gallery', (req, res) => res.render('gallery', schoolInfo));
app.get('/contact', (req, res) => res.render('contact', schoolInfo));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));