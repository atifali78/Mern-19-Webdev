module.exports = {
    LogIn: (req, res) =>{
        try {
            return res.send({
                response: "your SuccessFully LogIn.",
            })
        } catch (error) {
           return res.send({
                error:error,
            })
            
        }
    },
    LogOut: (req, res) =>{
        try {
            res.send({
                response: "your Logout!...",
            })
        } catch (error) {
            res.send({
                error:error,
            })
            
        }
    }
}