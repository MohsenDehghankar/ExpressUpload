import { NextFunction, Router, Response } from "express";
import fileUpload from "express-fileupload";
import controller from "../controller/fileController";

const router = Router();

export default (app: Router): void => {
  app.use("/upload", router);

  router.post("/", controller.upload);
};
