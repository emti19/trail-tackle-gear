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
      
      <div className="overflow-x-auto">
        <table className="table-comparison min-w-full">
          <thead>
            <tr>
              <th className="min-w-[200px]">Product</th>
              {featureLabels.map((label) => (
                <th key={label} className="min-w-[120px] text-center">
                  {label}
                </th>
              ))}
              <th className="min-w-[150px] text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{product.name}</p>
                      {product.badge && (
                        <span className="caption bg-foreground text-background px-2 py-0.5">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </td>
                {featureLabels.map((label) => {
                  const value = product.features[label];
                  return (
                    <td key={label} className="text-center">
                      {typeof value === "boolean" ? (
                        value ? (
                          <Check className="w-5 h-5 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 mx-auto text-muted-foreground" />
                        )
                      ) : (
                        <span>{value}</span>
                      )}
                    </td>
                  );
                })}
                <td className="text-center">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="btn-affiliate text-sm py-2 px-4 inline-flex items-center gap-1"
                  >
                    View
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-muted-foreground mt-4 italic">
        * Prices and availability subject to change. As an Amazon Associate, we earn from qualifying purchases.
      </p>
    </motion.div>
  );
}
