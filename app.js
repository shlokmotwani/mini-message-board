const express = require("express");
const path = require("node:path");
const { indexRouter } = require("./routes/indexRoutes");
const PORT = 3001;
const app = express();

app.set("view engine", "ejs");
// app.set("view", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server started. Listening to port:${PORT}`);
});

app.use((err, req, res, next) => {
    if(err){
        console.log("ERROR : " + err);
    }
})

app.all("/*", indexRouter);