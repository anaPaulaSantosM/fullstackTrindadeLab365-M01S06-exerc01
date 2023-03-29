const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Ana, funcionou!")
    
});

app.listen(3334);