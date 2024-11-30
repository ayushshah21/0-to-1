const z = require("zod");

function valInput(obj){
    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
        country: z.literal("IN").or(z.literal("US")),
    })
    const response = schema.safeParse(obj);
   if(response.success){
    console.log("HEYY");
   }
}

valInput({
    email: "kirat@gmail.com",
    password : "password",
    country : "IN"
});