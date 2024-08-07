const Joi = require("joi")

module.exports = {
    createStudentSchema : async (req, res, next) => {
        const createStudent = Joi.object({
            username: Joi.string().min(3).max(34).required(),
            password: Joi.string().min(8).max(18).required()
        });

        try {
             const validate = createStudent.validateAsync(req.body)     
             next();
            } catch (error) {
            return res.send({
                error: error,
            })
        }
    }
}
