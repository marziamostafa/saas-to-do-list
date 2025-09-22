import { NextFunction, Request, Response } from "express";
import { getTenantConnection } from "../tenantDb";

export const tenantMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Tenant middleware triggered");
  const host = req.headers.host || "";

  if (host === "tenant.returnhex.com") {
    // (req as any).isSuperadmin = true;
    return next(); // skip DB connection
  }

  // const host = req.hostname;
  const tenantId = host.split(".")[0];
  // const tenantId = req.path.split("/")[1];
  // const tenantId = host.split(".")[0].split(":")[0];

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
  console.log("req.hostname:", req.hostname);
  console.log("req.headers.host:", req.headers.host);
  console.log("tenant", tenantId); // need to run curl http://localhost:5000/
  // next();
};
