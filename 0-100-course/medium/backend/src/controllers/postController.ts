import express from 'express';
import { Request, Response } from 'express'; 
import z from 'zod';
import { PostModel } from '../models/postModel';

const blogSchema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
    userId: z.number(),
    published: z.boolean().optional()
})

const updateBlogSchema = z.object({
    title: z.string().min(1).optional(),
    content: z.string().min(1).optional(),
    userId: z.number().optional(),
    published: z.boolean().optional()
})

export class PostController {
    createBlog = async(req: Request, res: Response ) => {
        const validateBlog = blogSchema.safeParse(req.body);
        if(!validateBlog.success){
            return res.status(400).json({msg: "Invalid blog info"});
        }
        const createPost = await PostModel.createBlog(req.body);
        if(!createPost){
            return res.status(500).json({msg: "Internal Error, post not created"});
        }
        return res.status(200).json({msg: "Post created successfully", id: createPost.id});
    }
    updateBlog = async(req: Request, res: Response) => {
        const validateBlog = updateBlogSchema.safeParse(req.body);
        if(!validateBlog.success){
            return res.status(400).json({msg: "Invalid blog info"});
        }
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({msg: "Nothing was modified"});
        }
        const id = Number(req.params.id);
        if(!id || isNaN(id)){
            return res.status(400).json({msg: "Invalid blog"});
        }
        try{
        const updateBlog = await PostModel.updateBlog(id, req.body); 
        if(updateBlog) return res.status(200).json({msg: "Blog updated successfully"});
        else return res.status(400).json({msg: "Update Error"});
        }
        catch(err){
            return res.status(400).json({ msg: "Update error: Blog Post doesn't exist" });
        }
    }
}