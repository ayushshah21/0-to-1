import {PrismaClient} from '@prisma/client'
import {CreatePost, UpdatePost} from '../../types'

const prisma = new PrismaClient();

export class PostModel {
    static async createBlog(postData: CreatePost){
        return await prisma.post.create({
            data: postData
        });
    }
    static async updateBlog(id: number, data: UpdatePost){
        return await prisma.post.update({
            where: {
                id
            },
            data
        })
    }
    static async getBlog(id: number){
        return await prisma.post.findUnique({
            where : {
                id
            },
            select : {
                content: true,
                title: true,
                id: true,
                publishedDate: true,
                user: {
                    select : {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        })
    }
    static async getAllBlogs(){
        return await prisma.post.findMany({
            select : {
                content: true,
                title: true,
                id: true,
                publishedDate: true,
                user: {
                    select : {
                        firstName: true,
                        lastName: true
                    }
                }
            }
        });
    }
}