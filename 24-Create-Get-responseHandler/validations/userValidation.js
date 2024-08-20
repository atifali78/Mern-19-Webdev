const Joi = require('joi');

module.exports ={
    createSchema :async (req, res, next)=> {
       const userSchema  = Joi.object({
        username: Joi.string()
        .min(3)
        .max(30)
        .required(),
        password: Joi.string()
        .min(4)
        .max(18)
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),
       })
       try {
         await userSchema.validateAsync(req.body)
         next()
       } catch (error) {
        return res.send({
            error:error.message,
        })
       }
    }
}