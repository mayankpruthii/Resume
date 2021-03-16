const express = require("express");
const router = express.Router();
const port = 8080;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("./Assets"))

app.get("/", function(req, res) {
    res.render("index");
})

app.listen(port, function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log("server running at port ", port);
})