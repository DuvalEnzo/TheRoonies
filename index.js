const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/home/index.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/src/contact/index.html');

});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/src/about/index.html');

});
app.get('/legal', (req, res) => {
    res.sendFile(__dirname + '/src/legal/index.html');

});
//add img route
app.get('/roonies', (req, res) => {
    res.sendFile(__dirname + '/src/roonies/index.html');

});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

