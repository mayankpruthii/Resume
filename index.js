const express = require("express");
const router = express.Router();
const port = 3500;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("./Assets"))

app.get("/", function(req, res) {
    res.render("index");
})

app.get("/login", function(req, res) {
    res.render("login");
})

app.listen(process.env.PORT || port, 
           () => console.log("server running at port ", port))
