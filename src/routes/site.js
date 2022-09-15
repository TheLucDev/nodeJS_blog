var express = require("express");
var router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.search);

router.use("/", siteController.index);

module.exports = router;
// app.get("/news", (req, res) => {
//   console.log(req.query);
//   res.render("news");
// });
