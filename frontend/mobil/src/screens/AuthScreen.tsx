

import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

export default function AuthScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [tpId, setTpId] = useState<string | null>(null);

  async function register() {
    const res = await fetch('http://localhost:8080/auth/register', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, pin })
    });
    const data = await res.json();
    setTpId(data.tpId);
  }

  return (
    <View style={{ padding: 24 }}>
      <Text>Register</Text>
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="PIN" value={pin} secureTextEntry onChangeText={setPin} />
      <Button title="Register" onPress={register} />
      {tpId && (
        <>
          <Text>Your TP ID: {tpId}</Text>
          <Button title="Go to Pools" onPress={() => navigation.navigate('Pools', { ownerId: tpId })} />
        </>
      )}
    </View>
  );
}
