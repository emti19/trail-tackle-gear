import { Link } from "react-router-dom";

const categories = [
  { name: "Fishing", href: "/category/fishing" },
  { name: "Camping", href: "/category/camping" },
  { name: "Hiking", href: "/category/hiking" },
  { name: "Hunting", href: "/category/hunting" },
  { name: "Gear Reviews", href: "/category/gear-reviews" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Use", href: "/terms" },
  { name: "Affiliate Disclosure", href: "/disclosure" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <svg 
                viewBox="0 0 32 32" 
                className="w-8 h-8 fill-background"
                aria-hidden="true"
              >
                <path d="M16 2L4 14l4 4 8-8 8 8 4-4L16 2z" />
                <path d="M16 12l-8 8v10h6v-8h4v8h6V20l-8-8z" />
              </svg>
              <span className="font-heading text-2xl font-bold tracking-tight">
                Trail & Tackle
              </span>
            </Link>
            <p className="text-background/70 max-w-sm mb-6">
              Honest outdoor gear reviews to help you explore the wild with confidence. 
              From fishing to camping, we've got you covered.
            </p>
            <p className="caption text-background/50">
              © {new Date().getFullYear()} Trail & Tackle. All rights reserved.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Categories</h4>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclaimer */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-sm text-background/50 max-w-3xl">
            <strong>Affiliate Disclosure:</strong> Trail & Tackle is a participant in the 
            Amazon Services LLC Associates Program, an affiliate advertising program designed 
            to provide a means for sites to earn advertising fees by advertising and linking 
            to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
