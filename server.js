const express = require("express")
const graphqlHttp = require("express-graphql")
const cors = require("cors")
const schema = require("./schema")

const app = express()
app.use(cors())

app.use(
	"/graphql",
	graphqlHttp({
		schema,
		graphiql: true,
	}),
)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
