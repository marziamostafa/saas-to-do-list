import { NextFunction, Request, Response } from "express";


export const tenantMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log("Tenant middleware triggered");
    const host = req.headers.host || ""
    console.log("host", host) // need to run curl http://localhost:5000/
    next();
}