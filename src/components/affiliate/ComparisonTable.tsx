import { ExternalLink, Check, X } from "lucide-react";
import { motion } from "framer-motion";

export interface ComparisonProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: string;
  features: Record<string, boolean | string>;
  amazonUrl: string;
  badge?: string;
}

interface ComparisonTableProps {
  title: string;
  products: ComparisonProduct[];
  featureLabels: string[];
}

export function ComparisonTable({ title, products, featureLabels }: ComparisonTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="my-12"
    >
      <h3 className="heading-3 mb-6">{title}</h3>
      
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 bg-background">
            {/* Product Header */}
            <div className="flex items-start justify-between mb-4 pb-4 border-b">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-16 h-16 bg-secondary shrink-0 rounded">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div>
                  <p className="font-medium text-base">{product.name}</p>
                  {product.badge && (
                    <span className="caption bg-foreground text-background px-2 py-0.5 inline-block">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-affiliate text-sm py-2 px-4 inline-flex items-center gap-1 ml-2"
              >
                View
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Features Stack */}
            <div className="space-y-2">
              {featureLabels.map((label) => {
                const value = product.features[label];
                return (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <p className="text-muted-foreground font-medium">
                      {label}
                    </p>
                    <div className="flex items-center">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="w-5 h-5 text-green-600" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground" />
                        )
                      ) : (
                        <span className="font-medium">{value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4 italic">
        * Prices and availability subject to change. As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </motion.div>
  );
}
