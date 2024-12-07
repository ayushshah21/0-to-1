const PROD_URL = 'https://medium4-2i2p6ey5y-ayushshah21s-projects.vercel.app';
const DEV_URL = 'http://localhost:3000';
export const BACKEND_URL = import.meta.env.MODE === 'development' ? DEV_URL : PROD_URL;