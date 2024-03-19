import dotenv from "dotenv";
import HttpServer from "./infra/http/HttpServer";
import logger from "./infra/service/WinstonLogger";
import PostController from "./infra/http/api/PostController";
import MailController from "./infra/http/api/MailController";

dotenv.config();

const httpServer = new HttpServer()
try {
    PostController.configureRoutes(httpServer);
    MailController.configureRoutes(httpServer);

    httpServer.listen(3001);
} catch (error) {
    console.error("Error on main.ts", error)
    logger.error("Error on main.ts", error);
}
export const api = httpServer.app;

