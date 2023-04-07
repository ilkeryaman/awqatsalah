import express from 'express';
import authenticator from '../../../middleware/authentication/authenticator';
import dailyContentRoutes from './daily-content';
import placeRoutes from './place';
import prayerTimeRoutes from './prayer-time';

const router = express.Router();
router.use('/', authenticator);
router.use('/DailyContent', dailyContentRoutes);
router.use('/Place', placeRoutes);
router.use('/PrayerTime', prayerTimeRoutes);

export default router;

