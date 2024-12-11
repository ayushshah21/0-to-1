interface User {
    id: string,
    name: string
}
type Users = Record<string, User>;

const users: Users = {
    "123abc": {id: "ayush", name: "Ayush Shah"}
}

console.log(users);