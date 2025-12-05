
// src/lib/goalserve.ts
import axios from 'axios'

const GOALSERVE_API = process.env.GOALSERVE_API_KEY

export async function fetchLiveScores(sport: string) {
  try {
    const res = await axios.get(`https://api.goalserve.com/${sport}?key=${GOALSERVE_API}`)
    return res.data
  } catch (err) {
    console.error('Goalserve API error:', err)
    return null
  }
}
