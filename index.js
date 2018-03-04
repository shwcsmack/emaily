const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({bye: 'buddy'});
});

//https://powerful-hollows-50447.herokuapp.com/
const PORT = process.env.PORT || 5000;
app.listen(PORT);