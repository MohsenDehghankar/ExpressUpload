import axios, { AxiosRequestConfig } from "axios";
import logger from "../utils/logger";
import { Configs } from "../configs";

export class ModelService {
  constructor() {}

  async requestForOutput(file_address: string): Promise<any> {
    const axiosConfig = {
      method: "GET",
      url: Configs.modelURL + `/model/${file_address}`,
    } as AxiosRequestConfig;

    try {
      const response = await axios(axiosConfig);
      return response.data;
    } catch (e) {
      if (e.response) {
        logger.error(JSON.stringify(e.response.data));
        logger.error(e.response.status);
        logger.error(JSON.stringify(e.response.headers));
      } else if (e.request) {
        logger.error(JSON.stringify(e.request));
      } else {
        logger.error(JSON.stringify(e.message));
      }
      return Error("request error");
    }
  }
}
