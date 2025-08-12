import Joi from "joi";

const tokenValidation = Joi.string().required().messages({
  "string.base": "Verification token should be a type of text.",
  "string.empty": "Verification token should not be empty.",
  "any.required": "Verification token is required.",
});

export { tokenValidation };
