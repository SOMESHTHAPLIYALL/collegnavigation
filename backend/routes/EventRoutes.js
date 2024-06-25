const express = require("express");
const {
  createEvent,
  deleteEvent,
  getEvent,
} = require("../controllers/EventController");

const router = express.Router();

router.post("/create", createEvent);

router.post("/delete", deleteEvent);

router.get("/event", getEvent);

module.exports = router;
