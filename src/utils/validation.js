import Joi from 'joi'

const createValidationMiddleware = (attributes) => {
    const schema = Joi.object(
        Object.fromEntries(
            Object.entries(attributes).map(([key, config]) => {
                let validator = Joi[config.type]();

                if (config.required) {
                    validator = validator.required();
                }

                return [key, validator];
            })
        )
    );

    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};

export default createValidationMiddleware;
