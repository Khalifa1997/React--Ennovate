const jsonServer = require("json-server");
const FileSync = require("lowdb/adapters/FileSync");
const low = require("lowdb");
const server = jsonServer.create();
const adapter = new FileSync("db.json");
const router = jsonServer.router("db.json", "_id");
const db = low(adapter);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.get("/statuses/user_timeline/", function(req, res) {
  // See https://github.com/typicode/lowdb

  var nova = db.get("novas");
  if (nova) {
    res.send(nova);
  } else {
    res.sendStatus(404);
  }
});
server.use(router);
server.listen(3001, () => {
  console.log("JSON Server is running");
});
