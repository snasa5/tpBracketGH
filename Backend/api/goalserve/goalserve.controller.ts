import { Request, Response } from 'express';
import { getLiveScores, getMatchStats } from './goalserve.service';

export async function liveScores(req: Request, res: Response) {
  const { leagueId } = req.query;
  try {
    const data = await getLiveScores(String(leagueId));
    res.json(data);
  } catch {
    res.status(502).json({ error: 'goalserve unavailable' });
  }
}

export async function matchStats(req: Request, res: Response) {
  const { matchId } = req.params;
  try {
    const data = await getMatchStats(matchId);
    res.json(data);
  } catch {
    res.status(502).json({ error: 'goalserve unavailable' });
  }
}
