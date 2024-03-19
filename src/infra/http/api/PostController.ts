import HttpServer from "../HttpServer";
import {Request, Response} from 'express';
import axios from "axios";
import winstonLoggerFile from "../../service/WinstonLoggerFile";
import dotenv from "dotenv";
import MiddlewareAuth from "../../../service/MiddlewareAuth";

dotenv.config();

interface Post {
    data: []
}

export default class PostController {
    private static noAuth = (req: any, res: any, next: any) => {
        next()
    };

    static configureRoutes(httpServer: HttpServer) {
        httpServer.register("get", "/api/v1/posts", async(params: Response, body: Request) => {
            let posts: Post = {data: []};

            try {
                posts = await axios.get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${process.env.ACCESS_TOKEN}`);
            } catch (e) {
                winstonLoggerFile.info(e);
            }

            return {
                body: posts.data,
                status: 200
            }
        }, MiddlewareAuth.middlewareAuth);
    }
}