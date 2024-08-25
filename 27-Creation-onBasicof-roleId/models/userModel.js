const {models} = require("../models/index")   
   
module.exports ={
    createUser: async (body)=>{
        try {
            const user = await models.users.create({
                ...body,
            });
            return {
                response: user
            }
        } catch (error) {
            console.error(error);
            return res.send({
                error:error.message,
            })
            
        }
    },

    getAllUser: async()=>{
        try {
            const users = await models.users.findAll({
                // attributes: ["userId", "username"] 
                attributes: {
                    exclude: ["password"]
                }
            })
            return {
                response: users
            }
        } catch (error) {
            console.error(error)
            return res.send({
                error: error,
            })
        }
    }
}