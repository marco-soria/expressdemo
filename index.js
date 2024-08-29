const express = require('express');
const app = express();
require('dotenv').config();

//app.use(express.static('public'));

app.use("/", require('./routes/routes'));

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
    });