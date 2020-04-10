const express = require("express");
const actionHelpers = require("./data/helpers/actionModel");
const projectHelpers = require("./data/helpers/projectModel");
const projectRouter = express.Router();

//Gets all projects from localhost:5000/api/projects
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

//Creates new project at localhost:5000/api/projects
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

// Modifies a specified project (name and description)
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

// Deletes specified project
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

// Get request for specified actions
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
