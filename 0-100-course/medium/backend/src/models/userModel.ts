import {PrismaClient} from '@prisma/client'
import {User, UserSignIn} from '../../types'

const prisma = new PrismaClient();

export class UserModel {
    static async createUser(data: User){
        return await prisma.user.create({data});
    }

    static async findUser(id: number){
        return await prisma.user.findUnique({
            where :{
                id
            }
        })
    }

    static async findUserByCredentials({email, password}: UserSignIn){
        return await prisma.user.findUnique({
            where: {
                email,
                password
            }
        })
    }
    
}