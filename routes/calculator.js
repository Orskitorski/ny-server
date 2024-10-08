import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    const firstNumber = parseInt(req.query.n1 || "0")
    const secondNumber = parseInt(req.query.n2 || "0")
    const symbol = req.query.n3 || ""
    let answer = 0

    if (symbol == "+") {
        answer = firstNumber+secondNumber
    }
    if (symbol == "-") {
        answer = firstNumber-secondNumber
    }
    if (symbol == "*") {
        answer = firstNumber*secondNumber
    }
    if (symbol == "/") {
        answer = firstNumber/secondNumber
    }
    
    res.render("calculator.njk", {
        title: "Calculator",
        answer,
    })
})

export default router