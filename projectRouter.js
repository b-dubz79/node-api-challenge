const express = require("express");
const actionHelpers = require("./data/helpers/actionModel");
const projectHelpers = require("./data/helpers/projectModel");
const projectRouter = express.Router();

projectRouter.get("/", (req, res) => {
  projectHelpers
    .get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((err) => {
      res.status(500);
    });
});

projectRouter.post("/", (req, res) => {
  projectHelpers
    .insert(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

projectRouter.put("/:id", (req, res) => {
  projectHelpers
    .update(req.params.id, req.body)
    .then((modifiedName) => {
      res.status(201).json(modifiedName);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

projectRouter.delete("/:id", (req, res) => {
  projectHelpers
    .remove(req.params.id)
    .then((newList) => {
      res.status(200).json(newList);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

projectRouter.get("/:id", (req, res) => {
  projectHelpers
    .getProjectActions(req.params.id)
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

module.exports = projectRouter;
