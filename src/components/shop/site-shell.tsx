import { useState, type ReactNode } from "react";
import { Heart, Menu, Search, ShoppingBag, X, ArrowUpLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { BrandLogo } from "@/components/shop/brand-logo";
import { useStore } from "@/lib/shop/store";

const navItems = [
  { label: "زنانه", search: { category: "زنانه" } },
  { label: "مردانه", search: { category: "مردانه" } },
  { label: "همه محصولات", search: {} },
] as const;

function MainNav({ mobile = false }: { mobile?: boolean }) {
  return <>{navItems.map((item) => mobile ? <SheetClose asChild key={item.label}><Link to="/shop" search={item.search} className="flex items-center justify-between border-b py-5 text-xl">{item.label}<ArrowUpLeft className="size-5" /></Link></SheetClose> : <Link key={item.label} to="/shop" search={item.search} className="relative py-2 text-sm after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-seal after:transition-transform hover:after:scale-x-100">{item.label}</Link>)}</>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { cartCount, favorites } = useStore();
  const [searchOpen, setSearchOpen] = useState(false);
  return <div className="min-h-screen bg-background text-foreground">
    <div className="flex min-h-8 items-center justify-center bg-seal px-4 py-1 text-center text-xs text-seal-foreground">ارسال رایگان بالای ۴ میلیون تومان &nbsp;—&nbsp; فرصت تعویض تا ۱۰ روز</div>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8">
        <div className="flex items-center gap-1 justify-self-start">
          <Sheet><SheetTrigger asChild><Button variant="ghost" size="icon" className="lg:hidden" aria-label="باز کردن منو"><Menu /></Button></SheetTrigger><SheetContent side="right" className="w-[88vw] max-w-sm bg-background"><SheetTitle className="sr-only">منوی تار</SheetTitle><BrandLogo /><nav className="mt-12 grid"><MainNav mobile /><SheetClose asChild><Link to="/about" className="flex items-center justify-between border-b py-5 text-xl">داستان تار<ArrowUpLeft className="size-5" /></Link></SheetClose><SheetClose asChild><Link to="/faq" className="flex items-center justify-between border-b py-5 text-xl">راهنما<ArrowUpLeft className="size-5" /></Link></SheetClose></nav></SheetContent></Sheet>
          <nav className="hidden items-center gap-7 lg:flex"><MainNav /></nav>
        </div>
        <BrandLogo />
        <div className="flex items-center gap-0 justify-self-end">
          <Button variant="ghost" size="icon" aria-label="جست‌وجو" onClick={() => setSearchOpen((value) => !value)}>{searchOpen ? <X /> : <Search />}</Button>
          <Button variant="ghost" size="icon" asChild className="relative hidden sm:inline-flex"><Link to="/favorites" aria-label="علاقه‌مندی‌ها"><Heart />{favorites.length > 0 && <span className="absolute end-0 top-0 flex size-4 items-center justify-center bg-seal text-[10px] text-seal-foreground">{favorites.length.toLocaleString("fa-IR")}</span>}</Link></Button>
          <Button variant="ghost" size="icon" asChild className="relative"><Link to="/cart" aria-label="سبد خرید"><ShoppingBag />{cartCount > 0 && <span className="absolute end-0 top-0 flex size-4 items-center justify-center bg-seal text-[10px] text-seal-foreground">{cartCount.toLocaleString("fa-IR")}</span>}</Link></Button>
        </div>
      </div>
      {searchOpen && <form action="/shop" className="border-t border-border px-4 py-5"><div className="mx-auto flex max-w-2xl gap-2"><Search className="mt-2.5 size-5 text-muted-foreground" /><input name="q" autoFocus placeholder="چه چیزی در ذهن دارید؟" className="h-10 min-w-0 flex-1 border-b border-foreground bg-transparent px-2 outline-none" /><Button type="submit">جست‌وجو</Button></div></form>}
    </header>
    {children}
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8">
        <div className="grid gap-12 border-b border-primary-foreground/20 pb-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div><BrandLogo inverse /><p className="mt-6 max-w-sm text-sm leading-7 opacity-70">تار، روایت تازه‌ای از پوشاک شهری ایران؛ طراحی دقیق، تولید محدود و ترکیب‌هایی که از شما شروع می‌شوند.</p></div>
          <div><p className="font-medium">فروشگاه</p><div className="mt-5 grid gap-3 text-sm opacity-70"><Link to="/shop" search={{ category: "زنانه" }}>زنانه</Link><Link to="/shop" search={{ category: "مردانه" }}>مردانه</Link><Link to="/favorites">علاقه‌مندی‌ها</Link></div></div>
          <div><p className="font-medium">راهنما</p><div className="mt-5 grid gap-3 text-sm opacity-70"><Link to="/faq">پرسش‌های متداول</Link><Link to="/policies">ارسال و تعویض</Link><Link to="/contact">تماس با ما</Link></div></div>
          <div><p className="font-medium">بوتیک تهران</p><p className="mt-5 text-sm leading-7 opacity-70">کریم‌خان، خیابان خردمند<br />۰۲۱ ۸۸۳۱ ۴۲۱۰<br />hello@tar-studio.ir</p></div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs opacity-60 sm:flex-row sm:justify-between"><span>© ۱۴۰۵ استودیو تار</span><span>این فروشگاه یک تجربه نمایشی است.</span></div>
      </div>
    </footer>
  </div>;
}