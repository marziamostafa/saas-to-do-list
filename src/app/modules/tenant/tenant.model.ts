import { model, Schema } from "mongoose";
import { ITenant } from "./tenant.interface";

export const TenantSchema = new Schema<ITenant>({
  name: {
    type: String,
    required: true,
  },
  dbUrl: {
    type: String,
    required: true,
  },
  ownerEmail: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

export const TenantModel = model<ITenant>("Tenant", TenantSchema);
