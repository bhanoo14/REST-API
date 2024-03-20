const express = require('express');
const userRouter = require("./routes/users");

const app = express();
app.use(express.static("public"));
app.use(logger);

// If you use arrow function there be problem of function hoisting

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 5000;

app.get('/',logger, (req, res) => {
    res.send("Hello World");
    res.render('index');
})

app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}

app.listen(PORT, ()=>{
    console.log(`Listening at Port ${PORT}`);
})