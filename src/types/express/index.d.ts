import { Connection } from "mongoose";

declare module "express-serve-static-core" {
    interface Request {
        dbConnection?: Connection;
    }
}