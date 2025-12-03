

export default function PoolCard({ pool }: { pool: any }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, marginBottom: 12 }}>
      <div><strong>Name:</strong> {pool.name}</div>
      <div><strong>Type:</strong> {pool.type}</div>
      <div><strong>Owner:</strong> {pool.ownerId}</div>
      <div><strong>Created:</strong> {pool.createdAt}</div>
    </div>
  );
}
