
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4">
      <section className="py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-6">
            Predict smarter. Compete better.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Design brackets, run tournaments, and leverage AI-powered predictions—all in one platform.
          </p>
          <div className="flex gap-4">
            <Link href="/signup" className="px-5 py-3 rounded-md bg-secondary text-black font-semibold hover:opacity-90">
              Get started
            </Link>
            <Link href="/product" className="px-5 py-3 rounded-md border border-white/20 hover:border-white/40">
              See a live demo
            </Link>
          </div>
          <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
            <span>Trusted by organizers and teams</span>
          </div>
        </div>
        <div className="relative">
          {/* Replace with a real product shot or animation */}
          <Image src="/hero-bracket.png" alt="Bracket preview" width={800} height={500} className="rounded-lg border border-white/10" />
          <div className="absolute -bottom-4 -right-4 px-3 py-2 bg-black/60 rounded-md border border-white/10 text-sm">
            AI Upset Alert: Round 2 — 34% chance
          </div>
        </div>
      </section>

      <section className="py-12">
        <h2 className="font-display text-2xl mb-6">Why tpBracket</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="AI insights" desc="Win probabilities, confidence scores, and upset alerts." icon="sparkles" />
          <FeatureCard title="Collaboration" desc="Invite teams, share pools, and track leaderboards." icon="users" />
          <FeatureCard title="Flexibility" desc="Custom formats, seeding, and round rules." icon="adjustments" />
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="p-6 rounded-lg border border-white/10 hover:border-white/20 transition">
      <p className="font-semibold mb-2">{title}</p>
      <p className="text-sm text-gray-300">{desc}</p>
    </div>
  )
}
