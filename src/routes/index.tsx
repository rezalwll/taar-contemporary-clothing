import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpLeft, RefreshCcw, ShieldCheck, Truck, Quote } from "lucide-react";
import hero from "@/assets/tar-hero.jpg";
import editorial from "@/assets/tar-editorial.jpg";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/shop/product-card";
import { products } from "@/lib/shop/products";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "تار | پوشاک معاصر زنانه و مردانه" }, { name: "description", content: "فروشگاه آنلاین تار؛ پوشاک معاصر ایرانی با طراحی دقیق، تولید محدود و ارسال به سراسر ایران." }, { property: "og:title", content: "تار | هر روز، یک ترکیب تازه" }, { property: "og:description", content: "کالکشن تازه پوشاک شهری زنانه و مردانه تار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: HomePage,
});

function HomePage() {
  return <main>
    <section className="relative min-h-[calc(100svh-104px)] overflow-hidden bg-secondary">
      <img src={hero} alt="کالکشن پوشاک معاصر تار" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[27%_center] sm:object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent sm:bg-gradient-to-l sm:from-background sm:via-background/70 sm:to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100svh-104px)] max-w-[1440px] items-end px-5 pb-12 sm:items-center sm:px-8 sm:pb-0">
        <div className="max-w-xl text-primary-foreground sm:text-foreground"><div className="mb-5 flex items-center gap-3 text-xs"><span className="h-px w-10 bg-current" /> پرونده شماره ۰۱ / بهار ۱۴۰۵</div><h1 className="display-type text-6xl leading-[1.05] sm:text-8xl">هر روز،<br />یک ترکیب تازه</h1><p className="mt-6 max-w-md text-sm leading-7 opacity-80 sm:text-base">تار از خط، بافت و حرکت لباس شروع می‌کند؛ مجموعه‌ای محدود برای شهر، کار و تمام ساعت‌های بین آن‌ها.</p><div className="mt-8 flex flex-wrap gap-3"><Button size="lg" className="bg-seal text-seal-foreground hover:bg-seal/90" asChild><Link to="/shop" search={{}}>دیدن کالکشن <ArrowLeft /></Link></Button><Button size="lg" variant="outline" className="border-current bg-transparent" asChild><Link to="/about">مانیفست تار</Link></Button></div></div>
      </div>
      <div className="absolute bottom-5 left-5 hidden text-xs text-foreground/60 sm:block">TEHRAN — 35.7219° N</div>
    </section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mb-10 flex items-end justify-between border-t border-foreground pt-5"><div><p className="text-xs text-seal">تازه روی رگال</p><h2 className="display-type mt-2 text-4xl sm:text-6xl">انتخاب سردبیر</h2></div><Link to="/shop" search={{}} className="hidden items-center gap-2 text-sm hover:text-seal sm:flex">همه قطعه‌ها <ArrowUpLeft className="size-4" /></Link></div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-12 lg:grid-cols-4">{products.slice(0, 4).map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}</div>
    </section>

    <section className="grid bg-primary text-primary-foreground lg:grid-cols-[1.12fr_.88fr]">
      <img src={editorial} alt="ادیتوریال زنانه و مردانه تار" width={1408} height={1200} loading="lazy" className="h-full min-h-[480px] w-full object-cover" />
      <div className="flex flex-col justify-between p-7 sm:p-14 lg:p-16"><div><p className="text-xs text-seal">THE TAR EDIT / 01</p><h2 className="display-type mt-5 text-5xl leading-tight sm:text-7xl">لباس،<br />پیش از کلمه</h2><p className="mt-7 max-w-md leading-8 opacity-70">ما لباس را تزئین نمی‌کنیم؛ ساختارش را روشن‌تر می‌کنیم. هر قطعه جایی برای تفسیر شما باقی می‌گذارد.</p></div><Button variant="outline" className="mt-14 w-fit border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild><Link to="/about">خواندن داستان تار <ArrowLeft /></Link></Button></div>
    </section>

    <section className="mx-auto grid max-w-[1440px] border-x border-border md:grid-cols-2">
      <Link to="/shop" search={{ category: "زنانه" }} className="group relative min-h-[340px] overflow-hidden border-b border-border bg-seal p-8 text-seal-foreground md:border-b-0 md:border-l"><span className="text-xs opacity-70">۰۱ / WOMEN</span><h2 className="display-type mt-10 text-6xl">زنانه</h2><p className="mt-3 max-w-xs opacity-75">فرم‌های دقیق، حجم‌های آزاد و رنگی که نقطه پایان نیست.</p><ArrowUpLeft className="absolute bottom-8 left-8 size-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" /></Link>
      <Link to="/shop" search={{ category: "مردانه" }} className="group relative min-h-[340px] overflow-hidden bg-forest p-8 text-primary-foreground"><span className="text-xs opacity-70">۰۲ / MEN</span><h2 className="display-type mt-10 text-6xl">مردانه</h2><p className="mt-3 max-w-xs opacity-75">لایه‌های کاربردی برای ریتم متغیر روزهای شهری.</p><ArrowUpLeft className="absolute bottom-8 left-8 size-10 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2" /></Link>
    </section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8"><div className="grid border-y border-border sm:grid-cols-3">{[{ Icon: Truck, title: "ارسال سراسری", text: "تحویل ۲ تا ۵ روز کاری" }, { Icon: RefreshCcw, title: "۱۰ روز فرصت تعویض", text: "تعویض آسان سایز و مدل" }, { Icon: ShieldCheck, title: "کنترل نهایی", text: "بازبینی هر قطعه پیش از ارسال" }].map(({ Icon, title, text }, index) => <div key={title} className="flex gap-4 border-b border-border px-5 py-8 last:border-b-0 sm:border-b-0 sm:border-l sm:last:border-l-0"><span className="text-xs text-seal">۰{index + 1}</span><Icon className="size-6" /><div><h3 className="font-medium">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div></div>)}</div></section>

    <section className="bg-secondary py-20"><div className="mx-auto max-w-4xl px-5 text-center"><Quote className="mx-auto size-8 text-seal" /><blockquote className="display-type mt-6 text-3xl leading-relaxed sm:text-5xl">«کت تار همان قطعه‌ای شد که صبح جلسه می‌پوشم و شب با یک تغییر کوچک برای شام نگه می‌دارم.»</blockquote><p className="mt-7 text-sm text-muted-foreground">نسترن، معمار از تهران — خریدار تأییدشده</p></div></section>

    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8"><div className="grid items-end gap-8 border-t border-foreground pt-8 md:grid-cols-2"><div><p className="text-xs text-seal">نامه‌های تار</p><h2 className="display-type mt-3 text-4xl sm:text-5xl">پیش از همه خبردار شوید</h2><p className="mt-3 text-muted-foreground">از انتشار محدود، ادیتوریال‌ها و پشت‌صحنه طراحی.</p></div><form onSubmit={(event) => event.preventDefault()} className="flex border-b border-foreground"><input type="email" required placeholder="ایمیل شما" className="h-12 min-w-0 flex-1 bg-transparent outline-none" /><Button type="submit" variant="ghost">عضویت <ArrowLeft /></Button></form></div></section>
  </main>;
}