const express = require('express');

const PORT = process.env.PORT || 3003;

const app = express();

app.use(express.static('public/dist'));

app.listen(PORT, () =>
    console.log(`APP listening at http://localhost:${PORT}`)
);