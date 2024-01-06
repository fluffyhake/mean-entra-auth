import express from "express"
const authRouter = express.Router();

// Home page route.
authRouter.get("/login", (req, res) => {
    res.send({ "Status": "Loggin in "}).json;
  });

// About page route.
authRouter.get("/logout", (req, res) => {
    res.send({ "Status": "Loggin out"}).json;
  });

module.exports = authRouter;


export default authRouter