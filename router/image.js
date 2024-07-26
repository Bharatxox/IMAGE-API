const express = require("express");
const imageController = require("../controller/image");
const { getImage, createImage } = imageController;

const router = express.Router();

router.get("/", getImage);

router.post("/create", createImage);

module.exports = router;
