import { NextFunction, Request, Response } from "express";
import { TenantModel } from "../app/modules/tenant/tenant.model";

export const checkTenantStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const subdomain = req.headers.host?.split(".")[0];

  try {
    const tenant = await TenantModel.findById({ name: subdomain });

    if (!tenant || !tenant.isActive) {
      return res.status(403).json({
        success: false,
        message: "Tenant is blocked or not found"
      })
    }
    req.tenant = tenant.toObject();  // ✅ Attach tenant (as plain object if needed)
    next()
  } catch (err) {
    next()
  }
};
