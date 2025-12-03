
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, Text, Picker } from 'react-native';

export default function PoolsScreen({ route }: any) {
  const { ownerId } = route.params;
  const [items, setItems] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState<'individual' | 'institution'>('individual');

  useEffect(() => {
    fetch(`http://localhost:8080/pools/list?ownerId=${ownerId}`).then(r=>r.json()).then(setItems);
  }, [ownerId]);

  async function create() {
    const res = await fetch('http://localhost:8080/pools/new', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ownerId, name, type })
    });
    const pool = await res.json();
    setItems(prev => [pool, ...prev]);
  }

  return (
    <View style={{ padding: 24 }}>
      <Text>Create Pool</Text>
      <TextInput placeholder="Pool name" value={name} onChangeText={setName} />
      <Button title="Create" onPress={create} />
      {items.map((p) => (
        <View key={p.id} style={{ borderWidth: 1, padding: 12, marginTop: 12 }}>
          <Text>{p.name} — {p.type}</Text>
          <Text>Owner: {p.ownerId}</Text>
        </View>
      ))}
    </View>
  );
}
