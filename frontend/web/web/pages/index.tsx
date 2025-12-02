
import Link from 'next/link';
export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>TourneyPredict</h1>
      <p>AI-driven brackets with blockchain-backed payouts.</p>
      <nav>
        <Link href="/auth">Register/Login</Link> | <Link href="/pools">Pools</Link> | <Link href="/bracket">Bracket</Link>
      </nav>
    </main>
  );
}
