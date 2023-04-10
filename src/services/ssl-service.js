import dotenv from 'dotenv';
dotenv.config();

export const sslEnabled = process.env.SSL_ENABLED ??= false;