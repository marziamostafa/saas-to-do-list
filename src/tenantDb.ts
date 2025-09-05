import mongoose, { Connection } from "mongoose";
import config from "./app/config";

const connections: Record<string, Connection> = {};

export const getTenantConnection = async (tenantId: string) => {
  if (connections[tenantId]) {
    return connections[tenantId];
  }
  // dynamic
  // const connection = await mongoose.createConnection(`${config.url}/${tenantId}?${config.ext}`, {
  //     dbName: tenantId,
  // })

  const connection = await mongoose.createConnection(
    `${config.url}/tenant1?${config.ext}`,
    {
      dbName: "tenant1",
    }
  );
  connections[tenantId] = connection;
  return connection;
};
