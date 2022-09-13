import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";

import {
  create_task,
  get_tasks,
  get_task,
  update_task,
  delete_task,
} from "../controllers/task.js";

/********************** POST ROUTES ************************/

/**
 *
 */
router.post("/", auth, create_task);

/********************** GET ROUTES ************************/

/**
 *
 */
router.get("/", auth, get_tasks);

/**
 *
 */
router.get("/:id", auth, get_task);

/********************** PATCH ROUTES ************************/

/**
 *
 */
router.patch("/:id", auth, update_task);

/********************** DELETE ROUTES ************************/

/**
 *
 */
router.delete("/:id", auth, delete_task);

export default router;
