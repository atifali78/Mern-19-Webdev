module.exports = {
    create: (req, res) => {
        try {
            return res.send({
                response: "create user POST API",
            });

        } catch (error) {
            return res.send({
                error: error,
            })

        }
    },

    getAll: (req, res) => {
        try {
            return res.send({
                response: "get all Users"
            })
        } catch (error) {
            return res.send({
                error: error,
            })

        }
    }


}