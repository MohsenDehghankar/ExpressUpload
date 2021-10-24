import express, { NextFunction, Router } from "express";
import router from "./api/index";
import { Configs } from "./configs";
import cors from "cors";
import fileUpload from "express-fileupload";
import logger from "./utils/logger";

const app = express();
const port = Configs.port; // default port to listen

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(Configs.api.prefix, router());

app.use((err: any, req: any, res: any, next: any) => {
  logger.error(err);
  res.status(500).send("Something broke!");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start the Express server
app.listen(port, () => {
  logger.info(`server started at port ${port}`);
});
