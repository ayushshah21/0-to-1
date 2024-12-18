import { NextResponse } from 'next/server';
import z from 'zod';
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const newUserSchema = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(3)
})

export async function POST(req: Request){
    try{
        const body = await req.json();
        const isValidUser = newUserSchema.safeParse(body);
        if(!isValidUser.success){
            return NextResponse.json({msg: "Invalid User Schema"});
        }
        const userExists = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        });
        if(userExists){
            return NextResponse.json({msg: "User exists. Please sign in"});
        }
        const hashedPassword = await bcrypt.hash(body.password, 10);

        const user = await prisma.user.create({
            data : {
                email: body.email,
                name: body.name,
                password: hashedPassword
            }
        });
        return NextResponse.json({user});

    }
    catch(err){
        NextResponse.json({msg: err});
    }
}