const { signup, login, getSignup, getLogin } = require("../controllers/userControllers");

const router=require("express").Router()

router.post("/signup",signup)
router.get("/signup",getSignup);
router.get("/login",getLogin);
router.post("/login",login)

module.exports=router;