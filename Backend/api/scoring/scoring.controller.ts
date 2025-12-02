import { Request, Response } from 'express';
import { scoreMatch } from './scoring.model';

export function scoreEndpoint(req: Request, res: Response) {
  const { match, prediction, isFinal } = req.body;
  try {
    const points = scoreMatch(match, prediction, isFinal);
    res.json({ points });
  } catch (e) {
    res.status(400).json({ error: 'invalid scoring payload' });
  }
}
