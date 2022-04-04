const express = require('express');
const app = express();
require('./server/config/mongoose.config');
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/jokes.routes')(app);


app.listen(port, () => console.log(`estamos utilizando el puerto : ${port}`))