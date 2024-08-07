module.exports = {
    createTEC: (req, res) => {
        try {
            return res.send({
                response: "Teacher created..",
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    getTEC: (req, res) => {
        try {
            return res.send({
                response: "Get all Teachers created.. ",
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    deleteTEC: (req, res) => {
        try {
            return res.send({
                response: "Delete teacher ",
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
};