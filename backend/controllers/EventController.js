const blogModel = require("../models/BlogModel");
const eventModel = require("../models/EventsModel");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).send({
        message: "Success false",
        success: false,
      });
    }

    const event = new eventModel({
      title: title,
      description: description,
      image: image,
    });
    await event.save();

    return res.status(200).send({
      message: "Succesfully created",
      success: true,
      event,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.body;

    const event = await eventModel.findByIdAndDelete(id);
    if (!event) {
      return res.status(404).send({
        message: "Event not found",
        success: false,
      });
    }

    return res.status(200).send({
      message: "Successfully deleted",
      success: true,
      event,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await eventModel.find();
    return res.status(200).send({
      message: "Event Fetched",
      success: true,
      event,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Internal Server Error",
      success: false,
      error,
    });
  }
};
