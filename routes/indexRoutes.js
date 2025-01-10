const express = require("express");
const {
  index_get,
  new_get,
  new_post,
  message_get,
} = require("../controllers/indexController");
const indexRouter = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const addToMessages = (msgObject) => {
  messages.push(msgObject);
};

indexRouter.use((req, res, next) => {
  res.locals.messages = messages;
  res.locals.addToMessages = addToMessages;
  next();
});

indexRouter.get("/", index_get);
indexRouter.get("/new", new_get);
indexRouter.post("/new", new_post);

indexRouter.get("/message", message_get);

indexRouter.use((err, req, res, next) => {
  if (err) {
    console.log(err);
  }
});

module.exports = { indexRouter };
