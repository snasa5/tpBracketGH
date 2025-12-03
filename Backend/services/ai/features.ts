
/**
 * Feature extraction for AI model training and inference.
 * Converts raw match stats into numerical features for ML.
 */
export function extractFeatures(stats: any): number[] {
  // Example: build feature vector from stats
  const features: number[] = [];
  features.push(stats.homeShots || 0);
  features.push(stats.awayShots || 0);
  features.push(stats.homePossession || 0);
  features.push(stats.awayPossession || 0);
  features.push(stats.homeFouls || 0);
  features.push(stats.awayFouls || 0);
  // Extend with more advanced features (injuries, historical trends, odds)
  return features;
}
