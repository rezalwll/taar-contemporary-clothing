import { Heart, Plus } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatPrice, type Product } from "@/lib/shop/products";
import { useStore } from "@/lib/shop/store";

export function ProductCard({ product, index }: { product: Product; index?: number }) {
  const { favorites, toggleFavorite, addToCart } = useStore();
  const liked = favorites.includes(product.id);
  return (
    <article className="group min-w-0 border-t border-border pt-3">
      <div className="mb-3 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>{String((index ?? product.id) + 1).padStart(2, "0")}</span>
        <span>{product.code}</span>
      </div>
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={`مشاهده ${product.name}`}>
          <img src={product.image} alt={product.name} width={900} height={1200} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:contrast-105" />
        </Link>
        {product.badge && <span className="absolute start-0 top-0 bg-seal px-3 py-2 text-[11px] text-seal-foreground">{product.badge}</span>}
        <Button variant="secondary" size="icon" onClick={() => toggleFavorite(product.id)} className="absolute end-2 top-2 size-9 border border-border bg-card/90" aria-label={liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}>
          <Heart className={cn("size-4", liked && "fill-seal text-seal")} />
        </Button>
        <Button onClick={() => addToCart(product.id, product.sizes[0] ?? "M")} className="absolute inset-x-0 bottom-0 translate-y-full justify-between bg-primary transition-transform group-hover:translate-y-0 focus-visible:translate-y-0">
          افزودن سریع <Plus />
        </Button>
      </div>
      <div className="pt-4">
        <div className="flex items-start justify-between gap-3">
          <div><p className="text-xs text-muted-foreground">{product.category} / {product.type}</p><Link to="/product/$slug" params={{ slug: product.slug }} className="mt-1 block font-medium hover:text-seal">{product.name}</Link></div>
          <div className="mt-1 flex shrink-0 gap-1">{product.colors.slice(0, 3).map((color) => <span key={color.name} title={color.name} className={cn("size-3 border border-border", color.className)} />)}</div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm"><span>{formatPrice(product.price)}</span>{product.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}</div>
      </div>
    </article>
  );
}