
import Link from 'next/link';

export default function Layout({ title, children }: any) {
  return (
    <main style={{ padding: 24 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1>TourneyPredict {title ? `— ${title}` : ''}</h1>
        <nav style={{ display: 'flex', gap: 12 }}>
          <Link href="/">Home</Link>
          <Link href="/auth">Auth</Link>
          <Link href="/pools">Pools</Link>
          <Link href="/bracket">Bracket</Link>
        </nav>
      </header>
      <section style={{ marginTop: 24 }}>{children}</section>
    </main>
  );
}
