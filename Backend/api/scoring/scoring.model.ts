export type Match = {
  home: string;
  away: string;
  actual: { home: number; away: number; corners?: number; fouls?: number; offsides?: number; penalties?: number };
};

export type Prediction = {
  winner: 'home' | 'away' | 'draw';
  score: { home: number; away: number };
  finalsExtras?: {
    cornersWinning: number;
    totalFouls: number;
    offsidesLosing: number;
    totalPenalties: number;
  };
};

export function scoreMatch(match: Match, pred: Prediction, isFinal = false): number {
  let points = 0;
  const actualWinner =
    match.actual.home > match.actual.away ? 'home' :
    match.actual.home < match.actual.away ? 'away' : 'draw';

  // Winner prediction
  if (pred.winner === actualWinner) points += isFinal ? 10 : 5;

  // Exact margin (scoreline)
  const marginPred = Math.abs(pred.score.home - pred.score.away);
  const marginAct = Math.abs(match.actual.home - match.actual.away);
  if (marginPred === marginAct && pred.score.home === match.actual.home && pred.score.away === match.actual.away) {
    points += isFinal ? 5 : 5;
  }

  if (isFinal && pred.finalsExtras) {
    // Finals mechanics
    if (pred.finalsExtras.cornersWinning === (actualWinner === 'home' ? match.actual.corners : match.actual.corners)) points += 2;
    if (pred.finalsExtras.totalFouls === match.actual.fouls) points += 2;
    if (pred.finalsExtras.offsidesLosing === match.actual.offsides) points += 3;
    if (pred.finalsExtras.totalPenalties === match.actual.penalties) points += 1;

    const perfect =
      (pred.winner === actualWinner) &&
      pred.score.home === match.actual.home &&
      pred.score.away === match.actual.away &&
      pred.finalsExtras.cornersWinning === (actualWinner === 'home' ? match.actual.corners : match.actual.corners) &&
      pred.finalsExtras.totalFouls === match.actual.fouls &&
      pred.finalsExtras.offsidesLosing === match.actual.offsides &&
      pred.finalsExtras.totalPenalties === match.actual.penalties;

    if (perfect) points += 10; // Bonus accuracy
  }

  return points;
}
