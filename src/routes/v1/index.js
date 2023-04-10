import express from 'express';
import authRoutes from './auth';
import nonAuthRoutes from './non-auth';

const router = express.Router();
router.use('/Auth', authRoutes);
router.use('/api', nonAuthRoutes);

export default router;