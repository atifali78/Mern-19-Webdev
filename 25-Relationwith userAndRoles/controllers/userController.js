const {createUser, getAllUser} = require("../models/userModel")
const responseHandler = require("../responseHandler")

module.exports = {
    userCreate: async (req, res ) => {
        try {
            const user = await createUser(req.body)
            // create user ki kitni possible return values ha (error and response)
            responseHandler(user, res);
        } catch (error) {
            return res.send({
                error: error,
            });
        }
    },

    getAllCreateUser: async (req, res) => {
        try {
            const users = await getAllUser();
            responseHandler(users, res);
        } catch (error) {
            return res.send({
                error: error,
            });
        }
    },

    userSpGet: async (req, res) => {
        try {
            const { username, password } = req.query;

            for (let i = 0; i < users.length; i++) {
                const isMatch = await compare(password, users[i].password);  //bcrypt compare method
                if (users[i].username === username && isMatch) {
                    return res.send({ "User exists": users[i] });
                }
            }
            return res.send("No user exists with such credentials");
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },

    delUser: (req, res) => {
        try {
            let { username, password } = req.query;
            let isValid = false;

            for (let i = 0; i < users.length; i++) {
                const isMatch = compare(password, users[i].password);
                if (users[i].username === username && isMatch) {
                    users.splice(i, 1);
                    isValid = true;
                    break;
                }
            }

            if (isValid) {
                return res.send({
                    response: "User deleted!"
                });
            } else {
                return res.send({
                    response: "User not found or password incorrect!"
                });
            }
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },
};
