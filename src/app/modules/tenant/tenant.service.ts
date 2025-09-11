import { ITenant } from "./tenant.interface";
import { TenantModel } from "./tenant.model";
import { ObjectId } from "mongodb";


// create tenant
const createTenant = async (tenant: ITenant) => {
  const result = await TenantModel.create(tenant);
  return result;
}



// get all tenants
const getAllTenants = async () => {
  const result = await TenantModel.find();
  return result;
};

const blockTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await TenantModel.findByIdAndUpdate(query, { isActive: false },
    {
      new: true
    })
  return result;
};

const unblockTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await TenantModel.findByIdAndUpdate(query, { isActive: true },
    {
      new: true
    }

  )
  return result;
}

const deleteTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  const result = await TenantModel.findByIdAndDelete(query);
  return result;
}


export const TenantService = {
  getAllTenants,
  blockTenant,
  unblockTenant,
  deleteTenant,
  createTenant,
}