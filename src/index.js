const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

app.use(express.static(path.join(__dirname, "public")));
//morgan hien thi trang thai server vd:[13/Sep/2022:09:16:18 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
// app.use(morgan("combined"));

app.use(
  express.urlencoded({
    extended: true,
  })
); //middleware
app.use(express.json());

//XML HTTP REQUEST, fetch , axios , ..

//template engine
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// home , search, contact

// route

route(app);

// 127.0.0.1:port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
