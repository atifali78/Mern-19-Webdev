const { models } = require("./index") // step-2 --2.0



module.exports = {
    getRole: async ({role}) => {  //step-1 is ko kya request chaiya ,kyu ky hum ny role hi send karna ha na
        try {
            const roles = await models.roles.findOne({         //step-2 --2.1
                where: {
                    role: role,     // fist role is database role   , 2nd wo role ha jo pass kr raha hu
                },
            });
            return {
                response: roles,
            }
        } catch (error) {
            console.log(error);
            return {
                error: error,
            }
        }
    }
}