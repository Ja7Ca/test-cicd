const router = require('express').Router();
const user = require('./controller/userGameController');
const biodata = require('./controller/userGameBiodataController')
const history = require('./controller/userGameHistoryController')
const login = require('./controller/loginController')


// Login
router.get('/', login.form)
router.post('/login', login.login)

// Render
router.get("/view/user", login.signin, user.indexView);
router.get("/view/user/add", login.signin, user.newView);
router.post("/view/user/add", login.signin, user.addView);
router.get("/view/user/:id", login.signin, user.showView);
router.post("/view/user/:id", login.signin, user.updateView);
router.get("/view/user/delete/:id", login.signin, user.deleteView);

router.get("/view/user/biodata/:id", login.signin, biodata.showView)
router.post("/view/user/biodata/:id", login.signin, biodata.updateView);
router.post("/view/user/add/biodata/:id", login.signin, biodata.addView)

router.get("/view/user/history/:id", login.signin, history.indexView);
router.get("/view/user/history/edit/:userid/:id", login.signin, history.showView);
router.post("/view/user/history/edit/:userid/:id", login.signin, history.updateView);
router.get("/view/user/add/history/:id", login.signin, history.newView);
router.post("/view/user/add/history/:id", login.signin, history.addView);
router.get("/view/user/history/delete/:userid/:id", login.signin, history.deleteView);

// Api
router.get("/api/user", user.indexApi);
router.get("/api/user/:id", user.showApi);
router.post("/api/user", user.addApi);
router.put("/api/user/:id", user.updateApi);
router.delete("/api/user/:id", user.deleteApi);

router.get("/api/biodata/:id", biodata.showApi)
router.post("/api/biodata/:id", biodata.addApi)
router.put("/api/biodata/:id", biodata.updateApi)
router.delete("/api/biodata/:id", biodata.deleteApi)

router.get("/api/history/:id", history.indexApi);
router.get("/api/history/:iduser/:id", history.showApi);
router.post("/api/history/:id", history.addApi);
router.put("/api/history/:iduser/:id", history.updateApi);
router.delete("/api/history/:iduser/:id", history.deleteApi);

module.exports = router;