
export default function ProductPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="font-display text-3xl mb-6">How tpBracket works</h1>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="p-6 rounded-lg border border-white/10">
          <p className="font-semibold mb-1">Bracket builder</p>
          <p className="text-sm text-gray-300">Design single-elimination, double-elimination, and custom formats.</p>
        </li>
        <li className="p-6 rounded-lg border border-white/10">
          <p className="font-semibold mb-1">Prediction engine</p>
          <p className="text-sm text-gray-300">Import historical performance, simulate outcomes, and export probabilities.</p>
        </li>
        <li className="p-6 rounded-lg border border-white/10">
          <p className="font-semibold mb-1">Collaboration</p>
          <p className="text-sm text-gray-300">Invite participants, share pools, and manage entries at scale.</p>
        </li>
        <li className="p-6 rounded-lg border border-white/10">
          <p className="font-semibold mb-1">Analytics</p>
          <p className="text-sm text-gray-300">Track accuracy over time and identify upset trends.</p>
        </li>
      </ul>
    </div>
  )
}
