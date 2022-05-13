const { UserGameHistory } = require("../models");

module.exports = {
    // View User
    indexView: (req, res) => {
        let userId = req.params.id;
        UserGameHistory.findAll({
            where: { user_game_id: +userId },
        })
        .then(histories => {
            res.status(200).render('views/userHistory', {histories, userId} )
        }).catch(err => {
            res.status(400).send('Tidak Menemukan User')
        })
    },

    showView: (req, res) => {
        UserGameHistory.findOne({
            where: { id: +req.params.id }
        })
        .then(history => {
            res.status(200).render('views/userHistoryEdit', {history})
        })
        .catch(err => res.status(400).send('Tidak Menemukan User'))
    },

    updateView: (req, res) => {
        const {game, score} = req.body
        const now = new Date()
        UserGameHistory.update(
            {game, score, last_login: now},
            {where: {id: +req.params.id}}
        )
        .then(history => {
            res.status(200).redirect("/view/user/history/"+req.params.userid)
        })
        .catch(err => {
            res.status(400).send("Gagal Update Data")
        })
    },

    newView: (req, res) => {
        try {
            let userId = +req.params.id
            res.status(200).render("views/userHistoryAdd", {userId})   
        } catch (error) {
            res.status(400).send("Tidak menemukan ID")
        }
    },

    addView: (req, res) => {
        const userId = +req.params.id
        const {game, score} = req.body
        const now = new Date()
        UserGameHistory.create(
            {game, score, last_login: now, user_game_id: userId}
        )
        .then(history => {
            res.status(200).redirect("/view/user/history/"+userId)
        })
        .catch(err => res.status(400).send('Gagal menambahkan history'))
    },

    deleteView: (req, res) => {
        const userId = req.params.userid
        UserGameHistory.destroy({where: {id: req.params.id}})
        .then(history => {
            res.status(200).redirect("/view/user/history/"+userId)
        }).catch(err =>{
            res.status(400).send("Tidak menemukan User")
        })
    },

    // Api
    indexApi: (req, res) => {
        let userId = req.params.id;
        UserGameHistory.findAll({
            where: { user_game_id: +userId },
        })
        .then(histories => {
            res.status(200).json({ message: "Success Get History By Id User", data: histories });
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    showApi: (req, res) => {
        UserGameHistory.findOne({
            where: [{user_game_id: +req.params.iduser}, {id: +req.params.id}]
        })
        .then(history => {
            res.status(200).json({ message: "Success Get History By Id", data: history });
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    updateApi: (req, res) => {
        const {game, score} = req.body
        const now = new Date()
        UserGameHistory.update(
            {game, score, last_login: now},
            {where: [{user_game_id: +req.params.iduser}, {id: +req.params.id}]}
        )
        .then(history => {
            res.status(200).json({ message: "Success Update History By Id", data: history });
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    addApi: (req, res) => {
        const userId = +req.params.id
        const {game, score} = req.body
        const now = new Date()
        UserGameHistory.create(
            {game, score, last_login: now, user_game_id: userId}
        )
        .then(history => {
            res.status(200).json({ message: "Success Menambah History With Id User", data: history });
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    deleteApi: (req, res) => {
        UserGameHistory.destroy(
            {where: [{user_game_id: +req.params.iduser}, {id: +req.params.id}]}
            )
        .then(history => {
            res.status(200).json({ message: "Success menghapus History By Id", data: history });
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    }
}