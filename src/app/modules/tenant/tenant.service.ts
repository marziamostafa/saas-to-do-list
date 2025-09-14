import mongoose from "mongoose";
import { ITenant } from "./tenant.interface";
import { TenantModel } from "./tenant.model";
import { ObjectId } from "mongodb";
import config from "../../config";

// create tenant
const createTenant = async (tenant: ITenant) => {
  const result = await TenantModel.create(tenant);
  return result;
};

// get all tenants
const getAllTenants = async () => {
  const result = await TenantModel.find();
  return result;
};

const blockTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await TenantModel.findByIdAndUpdate(
    query,
    { isActive: false },
    {
      new: true,
    }
  );
  return result;
};

const unblockTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await TenantModel.findByIdAndUpdate(
    query,
    { isActive: true },
    {
      new: true,
    }
  );
  return result;
};

const deleteTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };

  const tenant = await TenantModel.findById(query);
  if (!tenant) {
    throw new Error("Tenant not found");
  }
  const dbName = tenant.name;

  // Drop the tenant's database
  const tempConnection = await mongoose
    .createConnection(`${config.url}/${dbName}?${config.ext}`)
    .asPromise();

  await tempConnection.dropDatabase();
  await tempConnection.close();

  const result = await TenantModel.findByIdAndDelete(query);
  return result;
};

export const TenantService = {
  getAllTenants,
  blockTenant,
  unblockTenant,
  deleteTenant,
  createTenant,
};
