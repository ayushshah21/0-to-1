import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('rrr!'))

export default app