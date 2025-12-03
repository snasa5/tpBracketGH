
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function BracketScreen() {
  async function score() {
    await fetch('http://localhost:8080/scoring/score', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        match: { home: 'USA', away: 'CAN', actual: { home: 2, away: 1 } },
        prediction: { winner: 'home', score: { home: 2, away: 1 } },
        isFinal: false
      })
    });
  }
  return (
    <View style={{ padding: 24 }}>
      <Text>Bracket</Text>
      <Button title="Score sample" onPress={score} />
    </View>
  );
}
