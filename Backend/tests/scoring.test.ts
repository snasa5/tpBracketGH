
import { describe, it, expect } from '@jest/globals';
import { scoreMatch } from '../api/scoring/scoring.model';

describe('Scoring', () => {
  it('awards 5 points for correct winner (non-final)', () => {
    const points = scoreMatch(
      { home: 'USA', away: 'CAN', actual: { home: 2, away: 1 } },
      { winner: 'home', score: { home: 2, away: 1 } },
      false
    );
    expect(points).toBeGreaterThanOrEqual(5);
  });
});
