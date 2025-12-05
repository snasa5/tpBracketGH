
// src/lib/scoring.ts
export function calculateScore(predictions: string[], results: string[]) {
  let score = 0
  predictions.forEach((pick, i) => {
    if (pick === results[i]) score += 10
    else if (pick && results[i]) score += 2 // partial credit
  })
  return score
}
