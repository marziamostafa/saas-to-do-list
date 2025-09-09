import { TenantModel } from "./tenant.model";
import { ObjectId } from "mongodb";

// get all tenants
const getAllTenants = async () => {
  const result = await TenantModel.find();
  return result;
};

const blockTenant = async (id: string) => {
  const query = { _id: new ObjectId(id) };
  //   const result
};
