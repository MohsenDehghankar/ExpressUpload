import { Router } from "express";
import fileRouter from "./routes/fileRouter";

export default (): Router => {
  const app = Router();

  fileRouter(app);
  return app;
};
