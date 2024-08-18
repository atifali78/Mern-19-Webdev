const Joi = require('joi');

module.exports ={
    createUserSchema:async (req, res, next)=> {
       const createUser = Joi.object({
         username: Joi.string().min(6).max(18).required(),
         password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
       })
       try {
         await createUser.validateAsync(req.body);
         next();
       } catch (error) {
        return res.send({
            error:error.message,
        })
        
       }
    }
}