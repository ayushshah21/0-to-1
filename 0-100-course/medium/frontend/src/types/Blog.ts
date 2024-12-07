export interface Blog {
    publishedDate: Date,
    title: string,
    content: string
    user : {
        firstName: string,
        lastName: string
    }
}