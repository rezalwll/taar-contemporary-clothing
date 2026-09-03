import { Link } from "@tanstack/react-router";
import mark from "@/assets/tar-mark.png";
import { cn } from "@/lib/utils";

export function BrandLogo({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <Link to="/" className={cn("inline-flex items-center gap-2", inverse && "text-primary-foreground")} aria-label="تار، صفحه اصلی">
      <img src={mark} alt="" width={816} height={816} className={cn("size-9 object-contain", inverse && "invert")} />
      {!compact && <span className="display-type text-3xl leading-none">تار</span>}
    </Link>
  );
}