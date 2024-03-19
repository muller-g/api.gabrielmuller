import nodemailer, { Transporter } from "nodemailer";
import dotenv from "dotenv";
import {contactEmailResponse} from "../mail-template/SendResponseContact";
import {contactEmail} from "../mail-template/SendContact";

dotenv.config();

export default class NodeMailer {
    static async sendMailResponse(email: string, name: string){
        const contactEmailTemplate: any = contactEmailResponse(name);

        const transporter: Transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: '"Gabriel Müller Dev 👻" <contato@gabrielmullerdev.com.br>',
            to: email,
            subject: "Recebemos o seu contato ✔",
            text: "",
            html: contactEmailTemplate
        });
    }

    static async sendMail(email: string, name: string, phone: string, msg: string){
        const contactEmailTemplate: any = contactEmail(name, email, phone, msg);

        const transporter: Transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: Number(process.env.MAIL_PORT),
            secure: false,
            auth: {
                user: process.env.MAIL_USERNAME,
                pass: process.env.MAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.sendMail({
            from: '"Gabriel Müller Dev 👻" <contato@gabrielmullerdev.com.br>',
            to: "gabriel_muller98@hotmail.com",
            subject: "Novo contato ✔",
            text: "",
            html: contactEmailTemplate
        });
    }
}
