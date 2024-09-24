import express from "express"

const router = express.Router()

router.get("/test", (req, res) => {
    res.send("Hello World")
});

router.get("/", (request, response) => {
    console.log(request.query)
    const name = request.query.name
    response.render("index.njk", {
        message: `Hemsidan nunjuckad och klar weee! Jag heter ${name}`,
        title: "Hem",
        items: ("Grabb", "1234"),
        url: "https://github.com/Orskitorski",
    })
})

router.get("/om", (request, response) => {
    response.render("om.njk", {
        message: "Omsidan!",
        title: "Om",
    })
})

router.get("/readme", (request, response) => {
    console.log(request)
    response.json({
        message: "Hello World",
    })
})

router.get("/watch", (request, response) => {
    const movieID = request.query.v
    console.log(movieID)

    const movies = {
        "ID": {
            title: "WALL-E",
            year: "2008",
        },

        "ID2": {
            title: "Ahmeds Pizzeria",
            year: "2019",
        }
    }

    const movie = movies[movieID]

    console.log(movie)

    response.render("watch.njk", {
        title: "watch",
        movie: movie,
    })
})

router.get("/ytub", (req, res) => {
    const ID = req.query.v
    console.log(ID)
    res.render("ytub.njk", {
        title: "Youtube",
        youtubeID: ID,
    })
})

export default router