const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //res.send("Hello Savesoil");
  res.render("index");
});

module.exports = router;
//export default
