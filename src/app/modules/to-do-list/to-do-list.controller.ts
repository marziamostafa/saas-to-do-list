import { Request, Response } from "express";
import { ToDoListService } from "./to-do-list.service";

const getToDoListFromDbController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const connection = req.dbConnection;
    if (!connection) {
      res.status(500).json({
        success: false,
        message: "No database connection",
      });
      return;
    }
    const result = await ToDoListService.getToDoList(connection);
    res.status(200).json({
      success: true,
      message: "To Do List fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

export const ToDoListController = {
  getToDoListFromDbController,
};
