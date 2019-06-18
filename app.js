let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');

let app = express();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('./'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views/index.html'));
});


app.listen(process.env.PORT || 3000, () => {
    console.log('Serve started');
})