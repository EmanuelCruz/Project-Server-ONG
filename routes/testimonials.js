const express = require("express");
const router = express.Router();
const multer = require("multer");
const testimonialsController = require("../controllers/testimonials");
const consts = require("../constant/const");

router.post(
  router.post(
    "/",
    multer(consts.MULTER_DESTINATION_PARAMS).single(consts.MULTER_KEY_NAME),
    testimonialsController.createTestimonials
  )
);

module.exports = router;
