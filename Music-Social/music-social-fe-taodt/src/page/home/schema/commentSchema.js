const yup = require("yup");

const comment = yup.object().shape({
  comment: yup.string().nullable().optional(),
});
