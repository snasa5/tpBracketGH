import axios from 'axios';

const GOALSERVE_KEY = process.env.GOALSERVE_KEY!;
const GOALSERVE_BASE = process.env.GOALSERVE_BASE || 'https://www.goalserve.com';

export async function getLiveScores(leagueId: string) {
  const url = `${GOALSERVE_BASE}/data/${leagueId}-livescore.json?key=${GOALSERVE_KEY}`;
  const { data } = await axios.get(url, { timeout: 5000 });
  return data;
}

export async function getMatchStats(matchId: string) {
  const url = `${GOALSERVE_BASE}/data/match/${matchId}.json?key=${GOALSERVE_KEY}`;
  const { data } = await axios.get(url, { timeout: 5000 });
  return data;
}
