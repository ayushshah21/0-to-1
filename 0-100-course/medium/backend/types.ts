interface User{
    email: string,
    name: string,
    password: string,
}
interface UserSignIn{
    email: string,
    password: string,
}
interface Post{
    title: string,
    content: string,
    published?: boolean,
}

export {User, Post, UserSignIn};