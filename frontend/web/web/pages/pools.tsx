
import { useEffect, useState } from 'react';
import { get, post } from '../lib/api';
import Layout from '../components/Layout';
import PoolCard from '../components/PoolCard';

export default function Pools() {
  const [items, setItems] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [type, setType] = useState<'individual' | 'institution'>('individual');
  const [ownerId, setOwnerId] = useState('');

  useEffect(() => {
    if (!ownerId) return;
    get(`/pools/list?ownerId=${ownerId}`).then(setItems);
  }, [ownerId]);

  async function create() {
    const pool = await post('/pools/new', { ownerId, name, type });
    setItems(prev => [pool, ...prev]);
  }

  return (
    <Layout title="Pools">
      <div style={{ display: 'flex', gap: 12 }}>
        <input placeholder="Owner TP ID" value={ownerId} onChange={e=>setOwnerId(e.target.value)} />
        <input placeholder="Pool name" value={name} onChange={e=>setName(e.target.value)} />
        <select value={type} onChange={e=>setType(e.target.value as any)}>
          <option value="individual">Individual</option>
          <option value="institution">Institution</option>
        </select>
        <button onClick={create}>Create pool</button>
      </div>
      <div style={{ marginTop: 24 }}>
        {items.map((p) => <PoolCard key={p.id} pool={p} />)}
      </div>
    </Layout>
  );
}
