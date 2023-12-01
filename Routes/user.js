const signup = require("../model/signupSchema")
const model = require("../model/userSchema")
const bcrypt = require("bcrypt")
const router = require("express").Router()





router.get("/", async (req, res) => {
    const User = await model.find()
    res.send({
        status: 200,
        User: User
    })

})
router.get("/:id", async (req, res) => {
    const User = await model.findById(req.params.id)
    res.send({
        status: 200,
        User: User
    })

})
router.post("//", async (req, res) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash
    const user = await signup.create({...req.body})
    res.send({
        status: 200,
        msg:"hello-world",
        User:user
       
    })

})
router.get("//", async (req, res) => {
    const user = await signup.find()
    res.send({
        status: 200,
        msg:"hello-world",
        User:user
       
    })

})
router.delete("/:id", async (req, res) => {
    const User = await model.findByIdAndDelete(req.params.id)
    res.send({
        status: 200,
        User: User
    })

})
router.post("/", async (req, res) => {
    const saltRounds = 10
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);
    req.body.password = hash
    const USer = await model.create({ ...req.body })
    res.send({
        status: 200,
        User: USer
    })


})

router.post("/Login", async (req, res) => {
    const { email, password } = req.body
    try {

        const USer = await model.findOne({ email: email })
        if (USer) {
            const ps = bcrypt.compareSync(password, USer.password);
            if (ps) {
                USer.password = undefined
                return res.send({
                    status: 200,
                    message: "User Login",
                    User: USer
                })
            }
            else {
                return res.send({
                    status: 403,
                    mesaage: "password not valid"
                })
            }
        }
        else {
            return res.send({
                status: 500,
                err: Error,

            })
        }

    }
    catch (err) {
        return res.send({
            status: 403
            ,
            Error: err || "Internal Server Error"
        })
    }
})
router.put("/:id", async (req, res) => {
    try {

        const USer = await model.findByIdAndUpdate(req.params.id, { ...req.body })
        res.send({
            status: 200,
            user: "Update",
            User: USer
        })


    }
    catch (err) {
        res.send({
            status: 403
            ,
            Error: err
        })
    }
})
module.exports = router
