const express = require("express");
const router = require("express").Router();

const { getNotes, addNote } = require("../controllers/noteController");
const { protect } = require("../middleware/auth");

router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;
