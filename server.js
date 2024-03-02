const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/api/data', (req,res) => {
    const pathToData = path.join(__dirname, 'data.json')
    const data = fs.readFileSync(pathToData)
    res.json(JSON.parse(data))
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
