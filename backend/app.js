const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

var env = dotenv.config()
dotenvExpand(env)

mongoose
    .connect(process.env.DB_URL,
              { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then(() => {
        const app = express()
        var corsOptions = {
              origin: '*',
              optionsSuccessStatus: 200
        }
        app.use(cors(corsOptions));
        app.use(express.json())
        app.use("/api", routes)
        app.listen(process.env.APP_PORT, () => {
        	console.log("The backend app is listening at port", process.env.APP_PORT)
		})
	})
