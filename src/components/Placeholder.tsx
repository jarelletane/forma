import type { Product } from "../types";

export function Placeholder({ product }: { product: Product }) {
  return (
    <div
      className={`placeholder priority-${product.priority.toLowerCase()}`}
      aria-label={`Image placeholder for ${product.name}`}
      role="img"
    >
      <span>{product.category}</span>
      <i />
      <small>Image coming soon</small>
    </div>
  );
}
