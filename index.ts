import express, { Express } from "express";
import { config } from "dotenv";

import logger from "./logger/logger";
import { routes } from "./routes/main";

config();

const app: Express = express();
app.use(express.json());
routes.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
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
