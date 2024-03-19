export default class MiddlewareAuth {
    static middlewareAuth(req: any, res: any, next: any){
        const authHeader = req.headers['authorization'];
        const token: string = authHeader.split(" ")[1];
        
        if(!token){
            return res.status(401).json({
                body: "No token provided",
                status: 401
            });
        }

        try {
            const secret: string = process.env.TOKEN || '';

            if(token !== secret){
                return res.status(403).json({
                    body: "Unauthorized",
                    status: 403
                });
            }

            next()
        } catch (e: any) {
            return res.status(403).json({
                body: "Unauthorized",
                status: 403
            });
        }
    }
}