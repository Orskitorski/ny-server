import express, { response } from "express" // ESM
import nunjucks from "nunjucks"
const app = express()
nunjucks.configure("views", {
  autoescape: true,
  express: app,
})
app.use(express.static("public"))
app.get("/", (request, response) => {
  console.log(request.query)
  const name = request.query.name
  response.render("index.njk", {
    message: `Hemsidan nunjuckad och klar weee! Jag heter ${name}`,
    title: "Hem",
    items: ("Grabb", "1234"),
    url: "https://github.com/Orskitorski",
  })
})
app.get("/om", (request, response) => {
  response.render("om.njk", {
    message: "Omsidan!",
    title: "Om",
  })
})



app.get("/readme", (request, response) => {
  console.log(request)
  response.json({
    message: "Hello World",
  })
})


const PORT = process.env.PORT || 3000

app.get("/watch", (request, response) => {
  const movieID = request.query.v
  console.log(movieID)

  const movies = {
    "ID" : {
      title: "WALL-E",
      year: "2008",
    },

    "ID2" : {
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

  //response.json(movie)
})

app.get("/ytub", (req, res) => {
  const ID = req.query.v
  console.log(ID)
  res.render("ytub.njk", {
    title: "Youtube",
    youtubeID: ID,
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})