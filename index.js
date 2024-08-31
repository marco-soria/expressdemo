const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config();
const {create} = require('express-handlebars');

const hbs = create({
    extname: '.hbs',
    defaultLayout: 'frontend',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use(express.static(path.join(__dirname, 'src', 'assets')));


app.use("/", require('./src/routes/routes'));

app.listen(process.env.PORT || 3001, () => {
    console.log('Server is running on port 3001');
    });