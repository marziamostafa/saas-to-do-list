import { Connection } from "mongoose";
import { TO_DO_LIST_MODEL } from "./to-do-list.model";

// get
const getToDoList = async (connection: Connection) => {
  const result = TO_DO_LIST_MODEL(connection).find();
  return result;
};

export const ToDoListService = {
  getToDoList,
};
