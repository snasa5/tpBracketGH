import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { rateLimiter } from './api/utils/rateLimit';
import { initInsights } from './config/appinsights';
import authRoutes from './api/auth/auth.routes';
import poolRoutes from './api/pools/pools.routes';
import scoringRoutes from './api/scoring/scoring.routes';
import payoutRoutes from './api/payouts/payouts.routes';
import goalserveRoutes from './api/goalserve/goalserve.routes';

const app = express();
initInsights();

app.use(cors());
app.use(express.json());
app.use(helmet());

// Sensitive route protection
app.use('/auth', rateLimiter);
app.use('/payouts', rateLimiter);

app.use('/auth', authRoutes);
app.use('/pools', poolRoutes);
app.use('/scoring', scoringRoutes);
app.use('/payouts', payoutRoutes);
app.use('/goalserve', goalserveRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`TourneyPredict backend listening on port ${port}`);
});
