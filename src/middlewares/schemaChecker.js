export default function schemaChecker(schema, type = "body") {
  return (req, res, next) => {
    const payload = type === "body" ? req.body : req.params;
    
    const { error } = schema.validate(payload, { abortEarly: false });
    
    if (error) {

      if (
        error.details.some(({ message }) =>
          message.includes('"image" must be a valid uri')
        )
      ) {
        return res
          .status(422)
          .send(error.details.map((detail) => detail.message));
      } else {
        if (
          error.details.some(({ message }) =>
            message.includes('"image" is not allowed to be empty')
          )
        ) {
          return res.status(422).send("image is not allowed to be empty");
        }
        return res
          .status(400)
          .send(error.details.map((detail) => detail.message));
      }
    }

    next();
  };
}
