import express from "express";
import {NAME} from '@repo/common/config'
const app = express()

app.get("/", (req, res) => {
    console.log(NAME)
    res.json({
        message: "hello world"
    });
})

app.listen(9000, () => {console.log("port 9000"),     console.log(NAME)})