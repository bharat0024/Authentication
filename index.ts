import express, { Express } from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";

import logger from "./logger/logger";
import { routes } from "./routes/main";
config();

const app: Express = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
try {
  app.listen(process.env.PORT || 8080, (): void => {
    logger.info(
      {},
      `Server is Running at http://localhost:${process.env.PORT || 8080}`
    );
  });
} catch (error) {
  logger.error(error, "Server error..");
}
