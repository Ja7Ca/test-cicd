const { UserGame } = require("../models");
let login = false;

module.exports = {
    form: async (req, res) => {
        if(!login){
            res.status(200).render('views/login')
        } else {
            res.status(200).redirect('/view/user')
        }
    },

    signin: (req, res, next) => {
        if(!login){
            res.status(200).render('views/login')
        } else {
            next();
        }
    },

    login: (req, res, next) => {
        const { username, password } = req.body;
        UserGame.findOne(
            {where: [{username: username},{password: password}]}
        )
        .then(status => {
            console.log(status)
            if(status !== null){
                login = true
                res.redirect("/view/user")
            } else {
                res.redirect("/")
            }
        })
        .catch(err => {
            res.json({error: err})
        })
    }
}