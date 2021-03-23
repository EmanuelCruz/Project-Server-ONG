const testimonialsQuery = require("../querys/testimonials");
var consts = require("../constant/const");
const updateEntry = require("../querys/news");
const uploadImage = require("../services/aws/s3UploadImage");

exports.createTestimonials = (req, res) => {
  if (!req.body.name || !req.body.content) {
    res
      .status(consts.FORBIDDEN_ACTION_CODE)
      .send({ error: consts.MISING_FIELDS });
  } else {
    const testimonial = {
      name: req.body.name,
      content: req.body.content,
    };
    uploadImage(req, (img) => {
      testimonial["image"] = img;
      testimonialsQuery
        .createTestimonial(testimonial)
        .then((dataNews) => {
          res.status(consts.code_success).json(dataNews);
        })
        .catch((err) => {
          res.status(consts.code_failure).send({ Error: err.message });
        });
    });
  }
};
