import { Request, Response } from "express";
import config from "../../config";
import { TenantService } from "./tenant.service";

// create tenant
const createTenantController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = req.body;

    if (!data.name) {
      res.status(400).json({
        success: false,
        message: "Tenant name is required",
      });
    }

    const dbUrl = `${config.url}/${data.name}/${config.ext}`;

    const result = await TenantService.createTenant({ ...data, dbUrl });

    res.status(200).json({
      success: true,
      messgae: "Tenant ceated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

// block a tenant

const blockTenantController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: "Tenant id is required",
      });
      return;
    }
    const result = await TenantService.blockTenant(id);
    res.status(200).json({
      success: true,
      message: "Tenant blocked successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

//unblock tenant
const unblockTenantController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: "Tenant id is required",
      });
      return;
    }
    const result = await TenantService.unblockTenant(id);
    res.status(200).json({
      success: true,
      message: "Tenant unblocked successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

// delete tenant

const deleteTenantController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    if (!id) {
      res.status(400).json({
        success: false,
        message: "Tenant id is required",
      });
      return;
    }
    const result = await TenantService.deleteTenant(id);
    res.status(200).json({
      success: true,
      message: "Tenant deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err,
    });
  }
};

export const TenantController = {
  createTenantController,
  blockTenantController,
  unblockTenantController,
  deleteTenantController,
};
