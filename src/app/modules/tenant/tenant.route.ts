import express from "express";
import { TenantController } from "./tenant.controller";

const router = express.Router();

router.post("/tenant", TenantController.createTenantController);
router.patch("tenant/block/:id", TenantController.blockTenantController);
router.patch("tenant/unblock/:id", TenantController.unblockTenantController);
router.delete("tenant/:id", TenantController.deleteTenantController);

export const TenantRoutes = router;
