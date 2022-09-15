var express = require("express");
var router = express.Router();
const newsController = require("../app/controllers/NewsController");

router.use("/:slug", newsController.show);

router.use("/", newsController.index);

module.exports = router;
// app.get("/news", (req, res) => {
//   console.log(req.query);
//   res.render("news");
// });
