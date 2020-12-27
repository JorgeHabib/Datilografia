const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3333, () => console.log('Server started on PORT 3333'))