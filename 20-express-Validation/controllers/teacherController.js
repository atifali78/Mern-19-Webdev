const arr = []
module.exports = {
    createTEC: (req, res) => {
        try {
            arr.push(req.body)
            return res.send({
                response: arr,
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
                response: arr,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    deleteTEC: (req, res) => {
        try {
            arr.length = 0;
            return res.send({
                response: arr,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
};