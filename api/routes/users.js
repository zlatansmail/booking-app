import express from "express";

import {
  createUser,
  deleteUser,
  getUsers,
  getSingleUser,
  updateUser
} from "../controllers/userControllers.js";
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
/*

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("user is authenticated");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("user is logged in and authenticated");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("user is logged in and authenticated as admin");
});

*/

router.post("/", createUser); // POST /api/users // create a new user

router.put("/:id", verifyUser, updateUser); //UPDATE /api/users/:id // update one user

router.delete("/:id", verifyUser, deleteUser); //DELETE /api/users/:id // delete one user

router.get("/:id", verifyUser, getSingleUser); //GET /api/users/:id  // get one user

router.get("/", verifyAdmin, getUsers); //GET /api/users // get all users


export default router;
