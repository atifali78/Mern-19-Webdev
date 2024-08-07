const ad = []
module.exports = {
    createADM: (req, res) => {
        try {
            ad.push(req.body)
            return res.send({
                response: ad,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    getADM: (req, res) => {
        try {
            return res.send({
                response: ad,
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
    deleteADM: (req, res) => {
        try {
            return res.send({
                response: "Delete admin ",
            });
        } catch (error) {
            return res.send({
                error: error,
            })
        }
    },
};