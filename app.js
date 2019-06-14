const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Serve started');
})