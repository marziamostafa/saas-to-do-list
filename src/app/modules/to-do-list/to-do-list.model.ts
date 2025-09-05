import { Connection, model, Schema } from "mongoose";
import { IToDo } from "./to-do-list.interface";

export const ToDoSchema = new Schema<IToDo>({
  listNo: {
    type: Number,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

export const TO_DO_LIST_MODEL = (connection: Connection) =>
  connection.model<IToDo>("ToDoList", ToDoSchema);
