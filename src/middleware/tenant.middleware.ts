import { NextFunction, Request, Response } from "express";
import { TenantModel } from "../app/modules/tenant/tenant.model";

export const checkTenantStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const subdomain = req.headers.host?.split(".")[0];
  const tenant = await TenantModel.findById({ name: subdomain });
};
