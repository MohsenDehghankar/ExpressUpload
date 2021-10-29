import winston from "winston";
import dotenv from "dotenv";

dotenv.config();

export const Configs = {
  port: "8080",
  api: {
    prefix: "/v1/api/gateway",
  },
  loggerConfig: {
    transports: [
      new winston.transports.Console({
        handleExceptions: true,
        format: winston.format.combine(
          winston.format.cli(),
          winston.format.splat()
        ),
      }),
    ],
  },
  uploadPath: process.env.UPLOAD_PATH,
  modelURL: process.env.MODEL_URL,
};
