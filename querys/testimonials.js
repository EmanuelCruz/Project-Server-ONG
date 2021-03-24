const db = require("../models");
const Testimonials = db.Testimonials;
const consts = require("../constant/const");

exports.createTestimonial = async (testimonial) => {
  try {
    const newTestimonial = await Testimonials.create(testimonial);
    return newTestimonial;
  } catch (error) {
    console.log(error);
  }
};
