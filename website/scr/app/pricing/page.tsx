
export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="font-display text-3xl mb-6">Pricing</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <PricingCard tier="Free" price="$0" features={['Basic brackets','Public pools','Email support']} cta="Start free" />
        <PricingCard tier="Pro" price="$19/mo" features={['Private leagues','AI predictions','Exports & embeds']} cta="Go Pro" />
        <PricingCard tier="Teams" price="Contact" features={['SSO','SLAs','Admin controls']} cta="Contact sales" />
      </div>
    </div>
  )
}

function PricingCard({ tier, price, features, cta }: { tier: string, price: string, features: string[], cta: string }) {
  return (
    <div className="p-6 rounded-lg border border-white/10">
      <p className="font-semibold">{tier}</p>
      <p className="text-3xl font-display my-2">{price}</p>
      <ul className="space-y-2 text-sm text-gray-300">
        {features.map(f => <li key={f}>• {f}</li>)}
      </ul>
      <button className="mt-4 px-4 py-2 rounded-md bg-primary text-white hover:opacity-90">{cta}</button>
    </div>
  )
}
