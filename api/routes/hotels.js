import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotels,
  getSingleHotel,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms
} from "../controllers/hotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel); // POST /api/hotels // create a new hotel

router.put("/:id", verifyAdmin, updateHotel); //UPDATE /api/hotels/:id // update one hotel

router.delete("/:id", verifyAdmin, deleteHotel); //DELETE /api/hotels/:id // delete one hotel

router.get("/find/:id", getSingleHotel); //GET /api/hotels/:id  // get one hotel

router.get("/", getHotels); //GET /api/hotels // get all hotels

router.get("/countByCity", countByCity); //GET /api/hotels/countByCityName // get count of hotels by city name)

router.get("/countByType", countByType); //GET /api/hotels // get all hotels

router.get("/room/:id", getHotelRooms); //GET /api/hotels/room/:id // get all rooms of a hotel

export default router;
