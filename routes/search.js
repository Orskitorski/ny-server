import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    const query = req.query.q || ""
    const names = ["John", "Henrik", "Olle", "Herman"]
    const filteredNames = names.filter(name => name.toLowerCase().includes(query.toLowerCase()))
    res.render("search.njk", {
        title: "Search",
        query,
        names: filteredNames,
    })
})

export default router