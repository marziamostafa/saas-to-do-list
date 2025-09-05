import { Connection } from "mongoose";
import { TO_DO_LIST_MODEL } from "./to-do-list.model";
import { IToDo } from "./to-do-list.interface";

// get
const getToDoList = async (connection: Connection) => {
  const result = TO_DO_LIST_MODEL(connection).find();
  return result;
};

// create
const createToDoListIntoDb = async (
  connection: Connection,
  listData: IToDo
) => {
  const result = await TO_DO_LIST_MODEL(connection).create(listData);
  return result;
};

export const ToDoListService = {
  getToDoList,
  createToDoListIntoDb,
};
