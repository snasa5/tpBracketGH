
import { useState } from 'react';
import { post } from '../lib/api';

export default function Auth() {
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');
  const [tpId, setTpId] = useState<string | null>(null);

  async function register() {
    const res = await post('/auth/register', { phone, pin });
    setTpId(res.tpId);
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Register</h2>
      <input placeholder="Phone" value={phone} onChange={e=>setPhone(e.target.value)} />
      <input placeholder="PIN" value={pin} onChange={e=>setPin(e.target.value)} type="password" />
      <button onClick={register}>Register</button>
      {tpId && <p>Your TourneyPredict ID: {tpId}</p>}
    </div>
  );
}
