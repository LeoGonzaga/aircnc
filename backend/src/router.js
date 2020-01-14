const express = require("express");
const multer = require("multer");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const StopProfileController = require("./controllers/ProfileSpotController");
const BookingController = require("./controllers/BookingController");

const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions/", SessionController.store);

routes.post("/spots/", upload.single("thumbnail"), SpotController.store);
routes.get("/spots/", SpotController.index);
routes.delete('/spots/delete/:id', SpotController.remove)


routes.get("/spotsProfile/", StopProfileController.show);

routes.post("/spots/:id/booking", BookingController.store);

module.exports = routes;
