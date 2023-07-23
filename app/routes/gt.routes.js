module.exports = app => {
  const gt = require("../controllers/gt")
  const r = require("express").Router();

  r.get("/", gt.findAll);
  r.get("/:id", gt.show);
  r.post("/", gt.create);
  r.put("/:id", gt.update);
  r.delete("/:id", gt.delete);

  app.use("/gt", r);
};