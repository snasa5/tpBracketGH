
import './globals.css'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'tpBracket — Predict smarter. Compete better.',
  description: 'Design brackets and leverage AI-powered predictions.',
  openGraph: {
    title: 'tpBracket',
    description: 'AI predictions for brackets and tournaments.',
    siteName: 'tpBracket',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              {/* Replace with your logo file */}
              <Image src="/logo-tpbracket.png" alt="tpBracket logo" width={36} height={36} />
              <span className="font-display text-lg">tpBracket</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/product" className="hover:text-secondary">Product</Link>
              <Link href="/use-cases" className="hover:text-secondary">Use cases</Link>
              <Link href="/pricing" className="hover:text-secondary">Pricing</Link>
              <Link href="/docs" className="hover:text-secondary">Docs</Link>
              <Link href="/blog" className="hover:text-secondary">Blog</Link>
              <Link href="/signin" className="px-3 py-1.5 rounded-md bg-primary text-white hover:opacity-90">
                Sign in
              </Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-10 grid sm:grid-cols-3 gap-8">
            <div>
              <p className="font-display text-xl mb-2">tpBracket</p>
              <p className="text-sm text-gray-300">Predict smarter. Compete better.</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Product</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/product">Overview</Link></li>
                <li><Link href="/use-cases">Use cases</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Company</p>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 pb-8 text-xs text-gray-400">© {new Date().getFullYear()} tpBracket</div>
        </footer>
      </body>
    </html>
  )
}
