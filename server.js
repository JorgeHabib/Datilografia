const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(3030, () => console.log('Server started on PORT 3030'))