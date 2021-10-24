import { Configs } from "../configs";
import winston from "winston";

export default winston.createLogger(Configs.loggerConfig);
