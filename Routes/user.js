const model = require("../model/userSchema")

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
router.delete("/:id", async (req, res) => {
    const User = await model.findByIdAndDelete(req.params.id)
    res.send({
        status: 200,
        User: User
    })

})
router.post("/", async (req, res) => {
    const USer = await model.create({ ...req.body })
    res.send({
        status: 200,
        User: USer
    })


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
