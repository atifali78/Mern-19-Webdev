    const user = []
module.exports = {
    createSTD: (req, res) => {
        try {
            user.push(req.body)
            return res.send({
                response: user,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    getSTD: (req, res) => {
        try {
            return res.send({
                response: user,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    deleteSTD: (req, res) => {
        try {
            user.length = 0;
            return res.send({
                response: user,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
};