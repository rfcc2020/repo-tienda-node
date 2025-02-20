const express = require('express');
const axion = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', async(req, res) => {
    try {        
    const response = await axion.get('https://fakestoreapi.com/products');
    const products = response.data;
    res.render('index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching users');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });