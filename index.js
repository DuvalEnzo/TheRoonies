const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/home/index.html');
})

//add img route



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

