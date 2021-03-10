const { body } = require("express-validator");

module.exports = {
  // GET organizacion public
  url_org: "/:id/public",
  // POST login with email and password
  url_auth_login: "/login",
  // SUCCESS code
  code_success: 200,
  // FAILURE code
  code_failure: 500,

  //** This string is used for validate email and password fields when the user login */
  loginValuesFieldValidator: [
    body("email").exists().isEmail().withMessage("Invalid email or password"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Invalid email or password"),
  ],

  //Mail API KEY
  SENGRID_API_KEY_TESTING:
    "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",
  SENGRID_API_KEY:
    "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",

  //Mailing data and fields
  COMPANY_MAIL: "", //Replace with validated mail from sengrid
  COMPANY_MAIL_TESTING: "adway94@gmail.com", //Only for testing porpuse

  //Register Mail
  MAIL_REGISTER_SUBJECT: "Regisro exitoso",
  MAIL_REGISTER_TEXT: "Su registro fue exitoso con los siguientes datos",

  //Contact Form mail
  MAIL_CONTACT_FORM_SUBJECT: "Recibimos su mensaje correctamente",
  MAIL_CONTACT_FORM_TEXT: "Nos estaremos comunicando a la brevedad",

  //Password Change Mail
  MAIL_PASSWORD_CHANGE_SUBJECT: "Su contraseña fue cambiada con exito",
  MAIL_PASSWORD_CHANGE_TEXT: "Su nueva contraseña es ",
};