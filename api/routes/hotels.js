import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotels,
  getSingleHotel,
  updateHotel
} from "../controllers/hotelControllers.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel); // POST /api/hotels // create a new hotel

router.put("/:id", verifyAdmin, updateHotel); //UPDATE /api/hotels/:id // update one hotel

router.delete("/:id", verifyAdmin, deleteHotel); //DELETE /api/hotels/:id // delete one hotel

router.get("/", getHotels); //GET /api/hotels // get all hotels

router.get("/:id", getSingleHotel); //GET /api/hotels/:id  // get one hotel

export default router;
