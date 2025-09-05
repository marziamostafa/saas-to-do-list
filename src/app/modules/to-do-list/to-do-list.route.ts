import express from "express";
import { ToDoListController } from "./to-do-list.controller";

const router = express.Router();

router.get("/to-do-list", ToDoListController.getToDoListFromDbController);
router.post("/to-do-list", ToDoListController.createToDoListIntoDbController);

export const ToDoListRoute = router;
