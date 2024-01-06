import express from "express"
import * as dotevnv from "dotenv"
import cors from "cors"
import helmet from "helmet"
import authRouter from "./auth/authRouter"


dotevnv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())


app.use("/auth", authRouter)


app.listen(3000, () => {
    console.log(`Server is listening on port 3000`)
})