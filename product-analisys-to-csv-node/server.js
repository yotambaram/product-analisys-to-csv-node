const express = require("express");
const apiRoute = require("./api/routes/get-data");

const app = express();

const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"))

app.use(apiRoute);



app.listen(PORT, function () {
        console.log('App listening on PORT ' + PORT);
});