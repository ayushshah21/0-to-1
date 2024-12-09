import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { postRouter } from './router/postRoutes'
import { userRouter } from './router/userRoutes'
const app = new Hono()
app.use('/api/*', cors())

app.get('/', (c) => c.text('rrr!'))
app.route('./api/v1/user', userRouter);
app.route('./api/v1/posts', postRouter);


export default app