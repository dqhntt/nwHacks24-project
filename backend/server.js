const express = require("express");
const mongoose = require("mongoose");
const Post = require('./models/posts')
const Reward = require('./models/rewards')
const User = require('./models/users')

const db_URI = "mongodb+srv://hackathon-admin:hackathon-admin@cluster0.frzatq9.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(db_URI)
.then((res) => console.log(res))
.catch((err) => console.log(err))


const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());






app.get("/", (req, res) => {
    res.status(200).json({ message: "success" });
})

app.get("/reward-points", (req, res) => {
    res.status(200).json({ message: "success" });
})

app.post("/reduce-points", (req, res) => {
    res.status(200).json({ message: "success" });
})

app.get("/user-points", (req, res) => {
    res.status(200).json({ message: "success" });
})



app.post("/add-user/", (req, res) => {
    User.findOne({email: req.body.email})
    .then((result) => {
        console.log(result)
        if (result === null) {
            const user = new User({
                email: req.body.email,
                points: 0
            })
        
            user.save()
                .then((result) => res.send(result))
                .catch((err) => res.send(err))
        } else {
            res.status(200).json({message: "User exists"})
        }
    })
})

app.listen(80);