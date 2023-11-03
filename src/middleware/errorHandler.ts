import { NextFunction, Request, Response } from "express";
import { APIError } from "../utils/APIError";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof APIError) {
        res.status(err.httpCode).json({ error: err.message });
        return;
    }
    
    res.status(500).json({
        error: {
        name: "Internal Server Error",
        }
    });
};