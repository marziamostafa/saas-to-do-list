import { Connection } from "mongoose";
import { ITenant } from "../../app/modules/tenant/tenant.interface";

declare module "express-serve-static-core" {
    interface Request {
        dbConnection?: Connection;
        tenant?: ITenant
    }
}