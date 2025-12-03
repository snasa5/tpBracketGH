
import axios from 'axios';
import { scoreMatch } from '../../api/scoring/scoring.model';

/**
 * Smart Picks service:
 * - Pulls live stats from Goalserve
 * - Runs predictive model (stubbed here, can connect to Azure ML)
 * - Returns AI-driven recommendations with probability scores
 */
export async function getSmartPick(matchId: string) {
  // Example: fetch stats from Goalserve
  const stats = await axios.get(`${process.env.GOALSERVE_BASE}/match/${matchId}.json?key=${process.env.GOALSERVE_KEY}`);
  
  // Stub predictive logic — in production, call Azure ML endpoint
  const prediction = {
    winner: 'home',
    confidence: 0.72,
    scoreline: { home: 2, away: 1 }
  };

  return {
    matchId,
    stats: stats.data,
    prediction
  };
}
