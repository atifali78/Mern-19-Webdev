module.exports = {
    LogIn: (req, res) => {
        try {
          return res.send({
            response: "You Successfully Login.."
          })  
        } catch (error) {
          return res.send({
            error: error,
          })
        }
    },
    LogOut: (req, res) => {
        try {
          return res.send({
            response: "You LogOut.."
          })  
        } catch (error) {
          return res.send({
            error: error,
          })
        }
    },
}