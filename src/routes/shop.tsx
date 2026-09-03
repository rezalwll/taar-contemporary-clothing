import { createFileRoute } from "@tanstack/react-router";
import { SlidersHorizontal, X, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/product-card";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, productTypes } from "@/lib/shop/products";

export const Route = createFileRoute("/shop")({
  validateSearch: z.object({ category: z.string().optional(), q: z.string().optional() }),
  head: () => ({ meta: [{ title: "فروشگاه | تار" }, { name: "description", content: "خرید کالکشن کامل پوشاک معاصر زنانه و مردانه تار با فیلتر دسته، نوع و موجودی." }, { property: "og:title", content: "فروشگاه پوشاک تار" }, { property: "og:description", content: "قطعه‌های تازه و تولید محدود تار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: ShopPage,
});

function Filters({ category, setCategory, type, setType, available, setAvailable }: { category: string; setCategory: (value: string) => void; type: string; setType: (value: string) => void; available: boolean; setAvailable: (value: boolean) => void }) {
  return <div className="grid gap-8"><div><div className="flex items-center justify-between"><h2 className="font-medium">دسته</h2>{(category !== "همه" || type !== "همه" || available) && <Button variant="ghost" size="sm" onClick={() => { setCategory("همه"); setType("همه"); setAvailable(false); }}><X /> پاک کردن</Button>}</div><div className="mt-3 grid">{["همه", "زنانه", "مردانه"].map((item) => <button key={item} className={`border-b py-3 text-start text-sm ${category === item ? "text-seal" : "text-muted-foreground hover:text-foreground"}`} onClick={() => setCategory(item)}>{item}</button>)}</div></div><div><h2 className="font-medium">نوع محصول</h2><div className="mt-3 flex flex-wrap gap-2">{["همه", ...productTypes].map((item) => <button key={item} className={`border px-3 py-2 text-xs ${type === item ? "border-primary bg-primary text-primary-foreground" : "border-border"}`} onClick={() => setType(item)}>{item}</button>)}</div></div><label className="flex cursor-pointer items-center justify-between border-y py-4 text-sm"><span>فقط موجودها</span><input type="checkbox" checked={available} onChange={(event) => setAvailable(event.target.checked)} className="size-4 accent-[var(--seal)]" /></label></div>;
}

function ShopPage() {
  const search = Route.useSearch();
  const [category, setCategory] = useState(search.category ?? "همه");
  const [type, setType] = useState("همه");
  const [available, setAvailable] = useState(false);
  const [sort, setSort] = useState("new");
  const list = useMemo(() => {
    const filtered = products.filter((product) => (category === "همه" || product.category === category) && (type === "همه" || product.type === type) && (!search.q || product.name.includes(search.q)) && (!available || product.stock === "موجود"));
    return [...filtered].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : a.id - b.id);
  }, [category, type, available, search.q, sort]);
  return <main className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14"><div className="grid gap-6 border-b border-foreground pb-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="text-xs text-seal">ARCHIVE / ۱۴۰۵</p><h1 className="display-type mt-2 text-5xl sm:text-7xl">فروشگاه تار</h1><p className="mt-3 text-sm text-muted-foreground">{list.length.toLocaleString("fa-IR")} قطعه برای ساختن ترکیب بعدی</p></div>{search.q && <div className="flex items-center gap-2 border-b pb-2 text-sm"><Search className="size-4" /> نتیجه برای «{search.q}»</div>}</div><div className="mt-7 flex items-center justify-between"><Sheet><SheetTrigger asChild><Button variant="outline" className="lg:hidden"><SlidersHorizontal /> فیلترها</Button></SheetTrigger><SheetContent side="right"><SheetTitle className="text-start">فیلتر محصولات</SheetTitle><div className="mt-8"><Filters {...{ category, setCategory, type, setType, available, setAvailable }} /></div></SheetContent></Sheet><div className="ms-auto w-44"><Select value={sort} onValueChange={setSort}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="new">ترتیب انتشار</SelectItem><SelectItem value="low">کمترین قیمت</SelectItem><SelectItem value="high">بیشترین قیمت</SelectItem></SelectContent></Select></div></div><div className="mt-10 grid gap-12 lg:grid-cols-[230px_1fr]"><aside className="hidden lg:block"><Filters {...{ category, setCategory, type, setType, available, setAvailable }} /></aside>{list.length ? <div className="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3">{list.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div> : <div className="flex min-h-96 items-center justify-center border-y text-center"><div><Search className="mx-auto size-8 text-muted-foreground" /><h2 className="mt-4 text-xl font-medium">چیزی در این ترکیب پیدا نشد</h2><p className="mt-2 text-sm text-muted-foreground">فیلترها را سبک‌تر کنید.</p></div></div>}</div></main>;
}