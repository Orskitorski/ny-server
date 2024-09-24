import express, { response } from "express" // ESM
import nunjucks from "nunjucks"
import morgan from "morgan"
import indexRouter from "./routes/index.js"
import searchRouter from "./routes/search.js"

const app = express()

nunjucks.configure("views", {
  autoescape: true,
  express: app,
})

app.use(express.static("public"))
app.use(morgan("dev"))
app.use("/search", searchRouter)

app.use("/", indexRouter)

const PORT = process.env.PORT || 3000

app.use((req, res) => {
  res.status(404).render("404.njk", {
    title: "404 - Not found",
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})