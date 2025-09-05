import { NextFunction, Request, Response } from "express";
import { getTenantConnection } from "../tenantDb";

export const tenantMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Tenant middleware triggered");
  const host = req.headers.host || "";
  const tenantId = host.split(".")[0];
  if (!tenantId) {
    return res.status(400).json({ error: "Tenant not found in subdomain" });
  }
  // (req as any).tenantId = tenant;

  try {
    req.dbConnection = await getTenantConnection(tenantId);
    next();
  } catch (err) {
    next(err);
    console.log(err);
  }

  console.log("host", host); // need to run curl http://localhost:5000/
  console.log("tenant", tenantId); // need to run curl http://localhost:5000/
  // next();
};
