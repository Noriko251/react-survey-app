import express from "express";
import db from "./db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/student", async (req, res) => {
    try {
        const { result } = req.body;
        const newReview = await db.query (
            "INSERT INTO survey (name, age, class, interest, review) VALUES ($1, $2, $3, $4, $5)",
            [result.name, result.age, result.class, result.interest, result.review]
        );
        // console.log(result);
        // res.json(newReview.rows[0]);
        res.redirect("/thankyou")
    } catch (err) {
        console.error(err.message);
    }
});

app.get("/review", async (req, res) => {
    try {
        const newData = await db.query (
            "SELECT * FROM survey;"
        );
        res.json(newData);
        // res.send(newData);
        // console.log(newData);
        // res.redirect("/review");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(4000, () => {
    console.log("server has started on port 4000");
});