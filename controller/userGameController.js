const { UserGame } = require("../models");

module.exports = {
    // View User
    indexView: async (req, res) => {
        const users = await UserGame.findAll({
            order: [ [ 'id', 'ASC' ]]
        })
        return res.status(200).render('views/users', {users} )
        // .then(users => {
            
        // })
    },

    showView: (req, res) => {
        UserGame.findOne({
            where: { id: +req.params.id }
        })
        .then(user => {
            res.render('views/userEdit', {user})
        })
        .catch(err => {
            console.error(err)
            res.status(404).send('Tidak Menemukan User')
        })
    },

    newView: (req, res) => {
        res.render('views/userAdd')
    },

    addView: (req, res) => {
        const {username, password} = req.body;
        UserGame.create(
            {username, password}
        )
        .then(user => {
            res.redirect('/view/user')
        })
        .catch(err => res.status(404).send('Gagal Tambah Data'))
    },

    updateView: (req, res) => {
        const {username, password} = req.body;
        UserGame.update(
            {username, password},
            {where: { id: +req.params.id }}
        )
        .then(user => {
            res.redirect("/view/user")
        })
        .catch((err) => {
            res.status(400).send('Gagal update user');
        })
    },

    deleteView: (req, res) => {
        UserGame.destroy({
            where: { id: +req.params.id }
        })
        .then(user => {
            res.redirect("/view/user")
        })
        .catch((err) => {
            res.status(400).send('Gagal delete user');
        })
    },

    // Api User
    indexApi: async (req, res) => {
        const users = await UserGame.findAll({
            order: [ [ 'id', 'ASC' ]],
            include: ['user_game_biodata', 'user_game_history']
        }
        )
        // return res.status(200).json({ message: "Success Get All Users", data: users });
        .then(users => {
            return res.status(200).json({ message: "Success Get All Users", data: users });
        })
        // .catch(err => {
        //     res.status(401).json({ message: err})
        // })
    },

    showApi: async (req, res) => {
        const user = await UserGame.findOne({
            where: { id: +req.params.id }
        })
        // return res.status(200).json({ message: "Success Get Id User", data: user });
        .then(user => {
            res.status(200).json({ message: "Success Get Id User", data: user });
        })
        .catch(err => {
            res.status(401).json({ message: err})
        })
    },

    addApi: (req, res) => {
        const {username, password} = req.body;
        UserGame.create(
            {username, password}
        )
        .then(user => {
            res.status(200).json({ message: "Success Create User", data: user });
        })
        .catch(err => {
            res.status(401).json({ message: err})
        })
    },

    updateApi: (req, res) => {
        const {username, password} = req.body;
        UserGame.update(
            {username, password},
            {where: { id: +req.params.id }}
        )
        .then(user => {
            res.status(200).json({ message: "Success Update User", data: user });
        })
        .catch((err) => {
            res.status(401).json({ message: err})
        })
    },

    deleteApi: (req, res) => {
        UserGame.destroy({
            where: { id: +req.params.id }
        })
        .then(user => {
            res.status(200).json({ message: "Success Delete User", data: user });
        })
        .catch((err) => {
            res.status(401).json({ message: err})
        })
    }
}