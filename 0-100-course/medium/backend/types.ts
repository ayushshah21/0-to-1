interface User{
    email: string,
    name: string,
    password: string,
}
interface UserSignIn{
    email: string,
    password: string,
}
interface CreatePost{
    title: string,
    content: string,
    published?: boolean,
    userId: number,
}
interface UpdatePost{
    title?: string,
    content?: string,
    published?: boolean,
}

export {User, CreatePost, UserSignIn, UpdatePost};