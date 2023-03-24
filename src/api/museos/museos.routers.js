const express = require("express");
const upload = require('../../middlewares/upload.file');
const router = express.Router();

const {
  getMuseos,
  postMuseos,
  putMuseos,
  deleteMuseos,
} = require("./museos.controllers");

router.get("/", getMuseos);
router.post("/", upload.single('image'), postMuseos);
router.put("/:id", upload.single('image'), putMuseos);
router.delete("/:id", deleteMuseos);

module.exports = router;
