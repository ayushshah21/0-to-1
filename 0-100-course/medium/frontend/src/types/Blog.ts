export interface Blog {
    id: number,
    publishedDate: Date,
    title: string,
    content: string
    user : {
        firstName: string,
        lastName: string
    }
}