
import React from 'react';
import { View, Text } from 'react-native';

export default function ScoreCard({ home, away, score }: { home: string; away: string; score: string }) {
  return (
    <View style={{ borderWidth: 1, padding: 12 }}>
      <Text>{home} vs {away}</Text>
      <Text>Score: {score}</Text>
    </View>
  );
}
