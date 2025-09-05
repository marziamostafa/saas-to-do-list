import express from "express";
import { ToDoListController } from "./to-do-list.controller";

const router = express.Router();

router.get("/to-do-list", ToDoListController.getToDoListFromDbController);

export const ToDoListRoute = router;
