const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// Routes
const mainRoute = require('./routes/mainRoute');

app.use(cors('*'));

app.use('/', mainRoute);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
