const express = require("express");
const actionHelpers = require("./data/helpers/actionModel");
const projectHelpers = require("./data/helpers/projectModel");
const actionRouter = express.Router();

// Get for multiple actions (this is an extra get request for actions)
actionRouter.get("/", (req, res) => {
  actionHelpers
    .get()
    .then((actions) => {
      res.status(200).json(actions);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

// Creates a new action
actionRouter.post("/", (req, res) => {
  actionHelpers
    .insert(req.body)
    .then((newAction) => {
      res.status(200).json(newAction);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

//
actionRouter.delete("/:id", (req, res) => {
  actionHelpers
    .remove(req.params.id)
    .then((newList) => {
      res.status(200).json(newList);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});

// Modifies specified action (project_id, description, notes)
actionRouter.put("/:id", (req, res) => {
  actionHelpers
  .update(req.params.id, req.body)
    .then((modifiedAction) => {
        console.log("!!!!!", modifiedAction)
      res.status(200).json(modifiedAction);
    })
    .catch((err) => {
      console.log("something went wrong", err);
    });
});


module.exports = actionRouter;
