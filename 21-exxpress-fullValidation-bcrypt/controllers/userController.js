const { hash, compare } = require("bcryptjs");
const users = [];

module.exports = {
    createUser: async (req, res) => {
        try {
            let { username, password } = req.body;
            const userExists = users.find((user) => user.username === username);

            if (userExists) {
                return res.send({
                    response: "User already exists!"
                });
            }

            const hashedPassword = await hash(password, 10);
            users.push({ username, password: hashedPassword });

            return res.send({
                response: {
                    username,
                    password: hashedPassword
                }
            });
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },

    getAllUser: (req, res) => {
        try {
            return res.send({
                response: users,
            });
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },

    getSpecificUser: async (req, res) => {
        try {
            const { username, password } = req.query;
            const user = users.find((user) => user.username === username );

            if (user) {
                const isMatch = await compare(password, user.password);
                if (isMatch) {
                    return res.send({
                        response: user
                    });
                } else {
                    return res.send({
                        response: "Invalid password."
                    });
                }
            } else {
                return res.send({
                    response: "User does not exist."
                });
            }
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },

    delUser: async (req, res) => {
        try {
            const { username, password } = req.query;
            const userIndex = users.findIndex((user) => user.username === username);

            if (userIndex !== -1) {
                const user = users[userIndex];
                const isMatch = await compare(password, user.password);

                if (isMatch) {
                    users.splice(userIndex, 1);
                    return res.send({
                        response: "User deleted successfully."
                    });
                } else {
                    return res.send({
                        response: "Invalid password."
                    });
                }
            } else {
                return res.send({
                    response: "User does not exist."
                });
            }
        } catch (error) {
            return res.send({
                error: error.message,
            });
        }
    },
};
