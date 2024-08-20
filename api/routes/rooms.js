import express from 'express';

import { createRoom, deleteRoom, getRooms, getSingleRoom, updateRoom, updateRoomAvailability } from '../controllers/roomControllers.js';
import { verifyAdmin } from '../utils/verifyToken.js';


const router = express.Router();

router.post("/:hotelId", verifyAdmin, createRoom); // POST /api/rooms // create a new room

router.put("/:id", verifyAdmin, updateRoom); //UPDATE /api/rooms/:id // update one room

router.put("/availability/:id", updateRoomAvailability); //UPDATE /api/rooms/availability/:id // update room availability

router.delete("/:id/:hotelId", verifyAdmin, deleteRoom); //DELETE /api/rooms/:id // delete one room

router.get("/", getRooms); //GET /api/rooms // get all rooms

router.get("/:id", getSingleRoom); //GET /api/rooms/:id  // get one room

export default router;