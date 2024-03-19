import HttpServer from "../HttpServer";
import {Request, Response} from 'express';
import axios from "axios";
import winstonLoggerFile from "../../service/WinstonLoggerFile";
import dotenv from "dotenv";
import NodeMailer from "../../../utils/NodeMailer";
import MiddlewareAuth from "../../../service/MiddlewareAuth";

dotenv.config();

interface Post {
    data: []
}

export default class MailController {
    private static noAuth = (req: any, res: any, next: any) => {
        next()
    };

    static configureRoutes(httpServer: HttpServer) {
        httpServer.register("post", "/api/v1/send-mail", async(params: Response, body: Request | any) => {
            const { email, name, phone, msg } = body.body;

            await NodeMailer.sendMailResponse(email, name);
            await NodeMailer.sendMail(email, name, phone, msg);

            return {
                body: "Success",
                status: 200
            }
        }, MiddlewareAuth.middlewareAuth);
    }
}