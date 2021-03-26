const { body } = require("express-validator");

module.exports = {
  // GET organizacion public
  url_org: "/:id/public",
  // POST login with email and password
  url_auth_login: "/login",
  // GET all users
  url_users: "/users",
  // SUCCESS code
  code_success: 200,
  // FAILURE code
  code_failure: 500,
  //FAILURE CODE 404
  CODE_FAILURE_404: 404,
  //USER NOT FOUND
  NOT_FOUND_USER: "User not found",
  //MISSING FIELDS
  FORBIDDEN_ACTION_CODE: 403,
  MISING_FIELDS: "Some fields are missing",
  //UPDATE SUCCESS
  UPDATE_SUCCESS: 0,
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

  //Aws S3
  AWS_REGION: "sa-east-1",
  AWS_ACCESS_KEY_ID: "AKIAX2K6IMK7P6G45VPN",
  AWS_SECRET_ACCESS_KEY: "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",
  AWS_BUCKET_NAME: "alkemy-ong",

  // User is not an admin:
  USER_IS_NOT_AN_ADMIN: "El usuario no es administrador",
  //News Route
  URL_NEWS_ID: "/:id",
  MESSAGE_NOT_FOUND: "News Not found",
  ARRAY_ENPTY: 0,
  //Authenticated user:
  // Authorization user token
  AUTHORIZATION: "authorization",
  TOKEN_IS_NOT_PROVIDED: "no token provided",
  // User Atrributes
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  EMAIL: "email",
  IMAGE: "image",
  URL_CONTACTS: "/contacts",
  // PLACEHOLDER IDS
  DEFAULT_ROLE_ID: 1,
  DEFAULT_ORG_ID: 1,
  // DUPLICATE EMAIL MESSAGE
  DUPLICATE_EMAIL_MSG: "Email is already in use.",
  // BCRYPT SALT ROUNDS
  SALT_ROUNDS: 8,
  // POST register new User
  URL_AUTH_REGISTER: "/register",
  // 400 FAILURE CODE
  CODE_FAILURE_400: 400,
  // Deleted News
  DELETED_NEWS: "News deleted successfully",
  ERROR_DELETED_NEWS: "Could not delete the news with id:",
  //Activities
  URL_POST_ACTIVITIES: "/",
  URL_PUT_ACTIVITIES: "/:id",
  // POST Success
  POST_SUCCESS: 201,
  // POST bad request
  POST_FAILURE: 400,
  // Activity not found
  NOT_FOUND_ACTIVITY: "Activity not found.",

  //MULTER LIBRARY
  MULTER_KEY_NAME: "image",
  MULTER_DESTINATION_PARAMS: { dest: "temp/" },

  //NEWS
  TYPE_NEWS: "news",

  // Mail new contact registred thank you message:
  MAIL_NEW_CONTACT_SUBJECT: "Gracias por registrarse.",
  MAIL_NEW_CONTACT_TEXT: "Ya estas en nuestra base de datos.",

  // Contact validation
  EMPTY_CONTACT_NAME: "El campo name tiene menos de 3 caracteres",
  EMPTY_CONTACT_EMAIL: "El campo email no es válido",

  // Categories:
  URL_CATEGORIES_UPDATE: "/:id",
  SUCCESS_CATEGORY_UPDATE: "La categoría ha sido actualizada exitosamente.",
  ERROR_DELETE_CATEGORIES: "La categoría no pudo ser actualizada.",
  ERROR_CATEGORIES_NOT_FOUND: "Error: Categoría no encontrada.",

  // Members
  CREATED_MEMBER: "Member created successfully",
  FIELD_NAME: "name",
  FIELD_IMAGE: "image",
};
