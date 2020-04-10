const express = require("express");
const actionHelpers = require("./data/helpers/actionModel");
const actionRouter = express.Router();

actionRouter.get('/', (req, res) => {
    actionHelpers.get(req.params.id)
    .then(actions => {
        res.status(202).json(actions)
    })
    .catch(err => {
        console.log('something went wrong', err)
    })
})

module.exports = actionRouter;