const index_get = (req, res) => {
  res.render("index", { title: "Home", messages: res.locals.messages });
};

const new_get = (req, res) => {
  res.render("form", { title: "Add Message", messages: res.locals.messages });
};

const new_post = (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  res.locals.addToMessages({ user, text, added: new Date() });
  res.redirect("/");
};

const message_get = (req, res) => {
  const user = req.body.user;
  const text = req.body.text;
  res.render("message", { title: "msg", message: res.locals.message });
};

module.exports = {
  index_get,
  new_get,
  new_post,
  message_get,
};
