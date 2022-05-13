const { UserGameBiodata } = require("../models");

module.exports = {
    // View Biodata
    showView: (req, res) => {
        UserGameBiodata.findOne({
            where: { user_game_id: +req.params.id }
        })
        .then(biodata => {
            let haveBiodata = true;
            if(biodata == null){
                biodata = {
                    "name": "",
                    "country": "",
                    "user_game_id": +req.params.id
                }
                haveBiodata = false;
            }
            res.render('views/userBiodata', {biodata, haveBiodata});
        })
        .catch(err => res.status(302).send('Tidak Menemukan Biodata'))
    },

    updateView: (req, res) => {
        const {name, country} = req.body;
        UserGameBiodata.update(
            {name, country},
            {where: { id: +req.params.id }}
        )
        .then(user => {
            res.status(200).redirect("/view/user")
        })
        .catch((err) => {
            console.error(err)
            res.status(302).send('Something is wrong');
        })
    },

    addView: (req, res) => {
        const {name, country} = req.body
        UserGameBiodata.create(
            {name, country, user_game_id:+req.params.id}
        )
        .then(biodata => {
            res.status(200).redirect("/view/user/"+req.params.id)
        })
        .catch((err) => {
            console.error(err)
            res.status(302).send('Gagal Tambah Biodata');
        })
    },

    // Api Biodata
    showApi: (req, res) => {
        UserGameBiodata.findOne({
            where: { user_game_id: +req.params.id }
        })
        .then(biodata => {
            if(biodata == null){
                res.status(200).json({ message: "Biodata Kosong", data: biodata });
            } else {
                res.status(200).json({ message: "Success Get Biodata Users", data: biodata });
            }
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    updateApi: (req, res) => {
        const {name, country} = req.body;
        UserGameBiodata.findOne({
            where: { user_game_id: +req.params.id }
        })
        .then(biodatas => {
            if(biodatas == null){
                res.status(200).json({ message: "Biodata Masih Kosong", data: biodatas });
            } else {
                UserGameBiodata.update(
                    {name, country},
                    {where: { user_game_id: +req.params.id }}
                )
                .then(biodata => {
                    res.status(200).json({ message: "Success Update Biodata Users", data: biodata });
                })
                .catch((err) => {
                    res.status(400).json({ message: err });
                })
            }
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    addApi: (req, res) => {
        const {name, country} = req.body
        UserGameBiodata.findOne({
            where: { user_game_id: +req.params.id }
        })
        .then(biodatas => {
            if(biodatas !== null){
                res.status(200).json({ message: "Biodata Sudah Terisi", data: biodatas });
            } else {
                UserGameBiodata.create(
                    {name, country, user_game_id:+req.params.id}
                )
                .then(biodata => {
                    res.status(200).json({ message: "Success Menambahkan Biodata", data: biodata });
                })
                .catch((err) => {
                    console.error(err)
                    res.status(400).send('Gagal Tambah Biodata');
                })  
            }
        })
        .catch(err => {
            res.status(400).json({ message: err });
        })
    },

    deleteApi: (req, res) => {
        UserGameBiodata.destroy(
            {where: {user_game_id: +req.params.id}}
        )
        .then(biodata => {
            res.status(200).json({ message: "Success Menghapus Biodata", data: biodata });
        })
        .catch((err) => {
            res.status(400).send('Gagal Menghapus Biodata');
        })
    }
}