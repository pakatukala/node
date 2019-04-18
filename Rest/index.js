
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const crudRepository = require('./database/crudRepository')
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
crudRepository.createConnection();

app.use('/api/v1/user', require('./Routes/userRoutes'))
app.use('/', (req, res, next) => {
    res.send("Hello world");
})

const port = process.env.PORT;
app.listen(port, () => console.log(`App running on ${port}`));




