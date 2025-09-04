import express, {
  type Application,
  type Request,
  type Response,
} from "express";

import cors from "cors";
import { tenantMiddleware } from "./middleware/tenant";

const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());
app.use(tenantMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
