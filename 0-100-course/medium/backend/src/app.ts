import express from 'express';
import { Request, Response, NextFunction } from 'express'; 
import cors from 'cors';
import userRoutes from './routes/userRoutes'
import postRoutes from './routes/postRoutes'

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/user', userRoutes);
app.use('/api/blog', postRoutes);


// Error handling
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

export default app;