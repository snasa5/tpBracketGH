

import { useState } from 'react';
import { post } from '../lib/api';

export default function Scoreboard() {
  const [points, setPoints] = useState<number | null>(null);

  async function score() {
    const payload = {
      match: { home: 'USA', away: 'CAN', actual: { home: 2, away: 1, corners: 5, fouls: 12, offsides: 2, penalties: 1 } },
      prediction: { winner: 'home', score: { home: 2, away: 1 }, finalsExtras: { cornersWinning: 5, totalFouls: 12, offsidesLosing: 2, totalPenalties: 1 } },
      isFinal: true
    };
    const res = await post('/scoring/score', payload);
    setPoints(res.points);
  }

  return (
    <div>
      <button onClick={score}>Score sample final</button>
      {points !== null && <p><strong>Points:</strong> {points}</p>}
    </div>
  );
}
