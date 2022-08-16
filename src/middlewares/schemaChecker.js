export default function schemaChecker(schema, type = 'body'){
    return (req, res, next) => {
        const payload = type === 'body' ? req.body : req.params;

        const { error } = schema.validate(payload, { abortEarly : false});

        if (error) {
            console.log(error.details);
        }
        
        next();
    }
}