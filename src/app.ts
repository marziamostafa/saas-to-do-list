import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import cors from "cors";
import { tenantMiddleware } from "./middleware/tenant";
import { ToDoListRoute } from "./app/modules/to-do-list/to-do-list.route";
import { TenantRoutes } from "./app/modules/tenant/tenant.route";
import { checkTenantStatus } from "./middleware/tenant.middleware";

const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// app.use(tenantMiddleware);
app.use((req, res, next) => {
  if (req.path.startsWith("/api/v1/superadmin")) {
    return next(); // Skip tenant middleware for superadmin routes
  }

  tenantMiddleware(req, res, (err) => {
    if (err) return next(err);

    checkTenantStatus(req, res, next);
  });
});

// Superadmin routes (global, not tenant-specific)
app.use("/api/v1/superadmin", TenantRoutes);

// Tenant-specific routes (protected by tenant check)
// app.use("/api/v1", checkTenantStatus, UserRoutes);

// application routes
app.use("/api/v1", ToDoListRoute);
// app.use("/api/v1", tenantMiddleware, checkTenantStatus, ToDoListRoute);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
