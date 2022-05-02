const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem, deleteItem, updateItem } = require("../controllers/tracks");
const { validatorCreateItem } = require('../validators/tracks');
const customHeader = require('../middleware/customHeader');

router.get("/", getItems);

router.get("/:id", getItem);

router.post('/', validatorCreateItem, customHeader, createItem);

module.exports = router