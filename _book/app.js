const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const port = process.env.PORT || 5000;
const httpServer = http.Server(app);

app.set('view engine', 'ejs');
app.set('views', '_book');

app.use(express.static('_book'));

app.get("/", (req, res) => {
    res.render("index");
});

httpServer.listen(port, () => {
    console.info(`server is running on ${port}`);
});
