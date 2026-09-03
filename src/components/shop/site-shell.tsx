import { useState, type ReactNode } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useStore } from "@/lib/shop/store";

const links = [{ to: "/shop", label: "فروشگاه" }, { to: "/shop", label: "زنانه", search: { category: "زنانه" } }, { to: "/shop", label: "مردانه", search: { category: "مردانه" } }, { to: "/about", label: "درباره سُهی" }] as const;
export function SiteShell({ children }: { children: ReactNode }) {
  const { cartCount, favorites } = useStore(); const [searchOpen, setSearchOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <div className="bg-primary px-4 py-2 text-center text-xs text-primary-foreground">ارسال رایگان سفارش‌های بالای ۳ میلیون تومان · تعویض تا ۷ روز</div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="md:hidden" aria-label="منوی اصلی"><Menu /></Button></SheetTrigger><SheetContent side="right" className="w-80"><SheetTitle className="text-start text-2xl">سُهی</SheetTitle><nav className="mt-10 grid">{links.map((link) => <Link key={link.label} to={link.to} search={'search' in link ? link.search : undefined} className="border-b py-4">{link.label}</Link>)}</nav></SheetContent></Sheet>
        <Link to="/" className="text-2xl font-semibold">سُهی</Link>
        <nav className="me-4 hidden items-center gap-6 text-sm md:flex">{links.map((link) => <Link key={link.label} to={link.to} search={'search' in link ? link.search : undefined} activeProps={{ className: "text-olive" }} className="transition-colors hover:text-olive">{link.label}</Link>)}</nav>
        <div className="ms-auto flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="جست‌وجو" onClick={() => setSearchOpen((value) => !value)}>{searchOpen ? <X /> : <Search />}</Button>
          <Button variant="ghost" size="icon" asChild className="relative"><Link to="/favorites" aria-label="علاقه‌مندی‌ها"><Heart />{favorites.length > 0 && <span className="absolute end-0 top-0 flex size-4 items-center justify-center rounded-full bg-olive text-[10px] text-olive-foreground">{favorites.length.toLocaleString("fa-IR")}</span>}</Link></Button>
          <Button variant="ghost" size="icon" asChild className="relative"><Link to="/cart" aria-label="سبد خرید"><ShoppingBag />{cartCount > 0 && <span className="absolute end-0 top-0 flex size-4 items-center justify-center rounded-full bg-olive text-[10px] text-olive-foreground">{cartCount.toLocaleString("fa-IR")}</span>}</Link></Button>
        </div>
      </div>
      {searchOpen && <form action="/shop" className="border-t px-4 py-3"><div className="mx-auto flex max-w-xl gap-2"><input name="q" autoFocus placeholder="نام محصول را جست‌وجو کنید…" className="h-10 flex-1 border-b bg-transparent px-2 text-sm outline-none focus:border-olive" /><Button type="submit">جست‌وجو</Button></div></form>}
    </header>
    {children}
    <footer className="mt-24 border-t bg-primary text-primary-foreground"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4"><div><p className="text-3xl font-semibold">سُهی</p><p className="mt-4 text-sm leading-7 opacity-75">پوشاکی برای آرامش هر روز؛ طراحی و دوخت مسئولانه در ایران.</p></div><div><p className="font-medium">دسترسی سریع</p><div className="mt-4 grid gap-3 text-sm opacity-75"><Link to="/shop">فروشگاه</Link><Link to="/about">داستان ما</Link><Link to="/contact">تماس با ما</Link></div></div><div><p className="font-medium">راهنمای خرید</p><div className="mt-4 grid gap-3 text-sm opacity-75"><span>راهنمای سایز</span><span>شرایط تعویض</span><span>ارسال سفارش</span></div></div><div><p className="font-medium">ارتباط با ما</p><p className="mt-4 text-sm leading-7 opacity-75">تهران، خیابان ولیعصر<br />۰۲۱-۸۸۵۵۴۴۳۳<br />hello@sohi.ir</p></div></div><div className="border-t border-primary-foreground/15 py-5 text-center text-xs opacity-60">© ۱۴۰۵ سُهی؛ همه حقوق محفوظ است.</div></footer>
  </div>;
}
