// import express from 'express';
import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import jwt from 'jsonwebtoken';
import z from 'zod'

const userSignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

export class UserController {
    signup = async (req: Request, res: Response) => {
        const user = await UserModel.createUser(req.body);
        console.log(user);
        const id = user.id;
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            return res.status(500).send("JWT Secret is not configured");
        }
        const token = jwt.sign({ id }, secret);

        if (!user) {
            return res.status(400).json({ msg: "Error, user not created" });
        }
        const userData = {id, email: user.email, firstName: user.firstName, lastName: user.lastName }
        return res.status(200).json({ msg: "User created successfully!", token, userData });
    }
    signin = async (req: Request, res: Response) => {
        if (req.username) {
            const username = req.username;
            const userExists = await UserModel.findUser(Number(username));
            if (!userExists) {
                return res.status(403).json({ msg: "User does not exist" });
            }
            return res.status(200).json({ msg: "Signed in successfully" })
        }
        const email = String(req.headers.username);
        const password = String(req.headers.password);
        const validInput = userSignInSchema.safeParse({ email, password });
        if (!validInput.success) {
            return res.status(400).json({ msg: "Please provide valid email and password" });
        }
        const userExists = await UserModel.findUserByCredentials({ email, password });
        console.log(userExists);
        if (!userExists) {
            return res.status(403).json({ msg: "Incorrect username or password" });
        }
        const id = userExists.id;
        const secret = process.env.JWT_SECRET;
        if(!secret){
            return res.status(403).json({msg: "Internal Error"});
        }
        const token = jwt.sign({id}, secret);
        const userData = {id, email: userExists.email, firstName: userExists.firstName, lastName: userExists.lastName }
        return res.status(200).json({msg: "Signed in successfully", token, userData});
    }


    getInfo = async (req: Request, res: Response) => {
        const email = req.body.email;
        console.log(email);
        if(!email) return res.status(400).json({msg: "Invalid Input"});
        try{
            const userInfo = await UserModel.getInfoEmail(email);
            return res.status(200).json({userInfo});
        }
        catch(err){
            return res.status(400).json({msg: "Invalid Input"});
        }
        
    }
}
