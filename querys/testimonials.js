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

exports.updateTestimonial = async (testimonial, testimonialId) => {
  try {
    const updateTestimonials = await Testimonials.update(testimonial, {
      where: { id: testimonialId },
    });
    testimonial = await Testimonials.findAll({
      where: { id: testimonialId },
    });
    return testimonial;
  } catch (error) {
    console.log(error);
  }
};

exports.getOneTestimonial = async (id) => {
  const oneTestimonial = await Testimonials.findAll({
    where: { id: id },
  });
  return oneTestimonial;
};

exports.getAllTestimonial = async () => {
  const allTestimonial = await Testimonials.findAll();
  return allTestimonial;
};
