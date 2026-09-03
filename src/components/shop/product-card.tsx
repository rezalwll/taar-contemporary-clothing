import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatPrice, type Product } from "@/lib/shop/products";
import { useStore } from "@/lib/shop/store";

export function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite, addToCart } = useStore();
  const liked = favorites.includes(product.id);
  return <article className="group min-w-0">
    <div className="relative aspect-[3/4] overflow-hidden bg-bone">
      <Link to="/product/$slug" params={{ slug: product.slug }} aria-label={`مشاهده ${product.name}`}>
        <img src={product.image} alt={product.name} width={476} height={978} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]" />
      </Link>
      {product.badge && <span className="absolute start-3 top-3 bg-card px-2 py-1 text-xs">{product.badge}</span>}
      <Button variant="secondary" size="icon" onClick={() => toggleFavorite(product.id)} className="absolute end-3 top-3 bg-card/90 shadow-none" aria-label={liked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}>
        <Heart className={cn(liked && "fill-sale text-sale")} />
      </Button>
      <Button onClick={() => addToCart(product.id, product.sizes[0])} className="absolute inset-x-3 bottom-3 h-10 translate-y-3 opacity-0 shadow-none transition-all group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100">
        <ShoppingBag /> افزودن سریع
      </Button>
    </div>
    <div className="pt-4">
      <p className="text-xs text-muted-foreground">{product.category} · {product.type}</p>
      <Link to="/product/$slug" params={{ slug: product.slug }} className="mt-1 block font-medium hover:text-olive">{product.name}</Link>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm"><span>{formatPrice(product.price)}</span>{product.oldPrice && <span className="text-xs text-muted-foreground line-through">{formatPrice(product.oldPrice)}</span>}</div>
    </div>
  </article>;
}
