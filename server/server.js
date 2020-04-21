const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;

// Router
const mainRouter = require('./routes/mainRoute');

app.use(cors('*'));

app.use('/', mainRouter);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});
