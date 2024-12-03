import express, { Express, Request, Response, NextFunction } from 'express';
import surveyRoutes from './routes/surveyRoutes';

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/surveys', surveyRoutes);

// Basic error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});