const DEV_URL = 'http://localhost:3000';
export const BACKEND_URL = import.meta.env.MODE === 'development' 
  ? DEV_URL 
  : (import.meta.env.VITE_BACKEND_URL || 'https://medium4-e11pe177n-ayushshah21s-projects.vercel.app');