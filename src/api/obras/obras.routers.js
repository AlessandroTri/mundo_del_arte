const express = require("express");
const upload = require('../../middlewares/upload.file');

const router = express.Router();

const {
  getObras,
  postObras,
  putObras,
  deleteObras,
} = require("./obras.controllers");

router.get("/", getObras);
router.post("/", postObras);
router.put("/:id", upload.single('image'), putObras);
router.delete("/:id", deleteObras);

module.exports = router;