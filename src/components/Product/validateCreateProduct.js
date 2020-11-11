export default function validateCreateProduct(values) {
  let errors = {};

  // Title Errors
  if (!values.title) {
    errors.title = "A user title is required.";
  }

  // Description Errors
  if (!values.description) {
    errors.description = "Your description is required.";
  } else if (values.description.length < 10)
    errors.description = "The description must be at least 10 characters.";

  // URL Errors
  if (!values.url) {
    errors.url = "Your url is required.";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "The URL must be valid.";
  }

  return errors;
}
