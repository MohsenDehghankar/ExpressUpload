import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { Configs } from "../../configs";
import { v4 as uuidv4 } from "uuid";
import logger from "../../utils/logger";
import { ModelService } from "../../services/ModelService";

async function _upload(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.files) {
      res.send({
        status: false,
        message: "No file uploaded",
      });
    } else {
      // @ts-ignore
      const uploadedFile: UploadedFile = req.files["file"];

      const fileName = createFileName();
      logger.info(`file \"${uploadedFile.name}\" saved as \"${fileName}\"`);

      uploadedFile.mv(Configs.uploadPath + fileName);

      const modelService = new ModelService();
      const result = await modelService.requestForOutput(fileName);

      res.send({
        status: true,
        message: "File is uploaded",
        data: {
          name: uploadedFile.name,
          mimetype: uploadedFile.mimetype,
          size: uploadedFile.size,
        },
        result: result,
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
}

const createFileName = (): string => {
  return uuidv4();
};

export default {
  upload: _upload,
};
