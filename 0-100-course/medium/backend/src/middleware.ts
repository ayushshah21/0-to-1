import express from 'express';
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            username?: string;
        }
    }
}

dotenv.config();

const prisma = new PrismaClient();

import z from 'zod';

const newUserSchema = z.object({
    email: z.string().email(),
    name: z.string().optional(),
    password: z.string().min(3),
})

const userSignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

const validateUser = async (req: Request, res: Response, next: NextFunction) => {
    const tokenArr = req.headers.authorization;
    if (tokenArr) {
        const token = tokenArr.split(" ")[1];
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).send("JWT Secret is not configured");
        }
        try {
            const decoded = jwt.verify(token, secret) as JwtPayload;
            if (decoded.id) {
                req.username = decoded.id;
                return next();
            }
        }
        catch (err) {
            return res.status(403).json({ msg: "Invalid token" });
        }
    }
    const userObj = { email: req.headers.username, password: req.headers.password };
    const validateCredentials = userSignInSchema.safeParse(userObj);
    if (!validateCredentials.success) {
        return res.status(400).json({ msg: "Please provide valid email and password" });
    }

    return next();
}


const userExists = async (req: Request, res: Response, next: NextFunction) => {
    const validateUser = newUserSchema.safeParse(req.body);
    if (!validateUser.success) {
        return res.status(400).json({ errors: validateUser.error });
    }
    const email = req.body.email;
    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    });
    if (userExists) {
        return res.status(400).json({ msg: "User already Exists" });
    }
    return next();
}

export { userExists, validateUser }