import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  amazonUrl: string;
  rating?: string;
  badge?: string;
}

interface ProductBoxProps {
  product: Product;
}

export function ProductBox({ product }: ProductBoxProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="product-box"
    >
      <div className="flex flex-col md:flex-row gap-6">
        {/* Product Image */}
        <div className="shrink-0 md:w-48">
          <div className="aspect-square bg-background border border-border overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {product.badge && (
              <span className="inline-block caption bg-foreground text-background px-3 py-1 mb-3">
                {product.badge}
              </span>
            )}
            <h4 className="heading-4 mb-2">{product.name}</h4>
            <p className="body-base text-muted-foreground mb-4">
              {product.description}
            </p>
            {product.rating && (
              <p className="body-small text-muted-foreground mb-4">
                Rating: {product.rating}
              </p>
            )}
          </div>
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="btn-affiliate inline-flex items-center gap-2 self-start"
          >
            Check Price on Amazon
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
