const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('src'));
app.get('/', (req, res) => {
    res.send()
})
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
