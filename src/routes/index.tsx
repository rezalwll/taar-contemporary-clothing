import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, Star, X } from "lucide-react";

import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "سیستم طراحی سُهی | بوتیک پوشاک مینیمال" },
      {
        name: "description",
        content:
          "پیش‌نمایش سیستم طراحی برند سُهی: پالت رنگ، تایپوگرافی، دکمه‌ها، کارت محصول، فرم‌ها و ناوبری.",
      },
      { property: "og:title", content: "سیستم طراحی سُهی" },
      {
        property: "og:description",
        content: "پیش‌نمایش کامل سیستم طراحی بوتیک پوشاک مینیمال سُهی.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DesignSystem,
});

const toman = (n: number) => `${n.toLocaleString("fa-IR")} تومان`;

function Section({
  id,
  title,
  hint,
  children,
}: {
  id: string;
  title: string;
  hint: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border py-14">
      <div className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-muted-foreground">{hint}</p>
      </div>
      {children}
    </section>
  );
}

const palette = [
  { name: "استخوانی (پس‌زمینه)", cls: "bg-background", token: "--background" },
  { name: "کاغذی (کارت)", cls: "bg-card", token: "--card" },
  { name: "بژ ملایم", cls: "bg-bone", token: "--bone" },
  { name: "خاکی گرم", cls: "bg-clay", token: "--clay" },
  { name: "زیتونی (لهجه برند)", cls: "bg-olive", token: "--olive" },
  { name: "زغالی (متن اصلی)", cls: "bg-primary", token: "--primary" },
  { name: "قرمز حراج", cls: "bg-sale", token: "--sale" },
  { name: "خط جداکننده", cls: "bg-border", token: "--border" },
];

const products = [
  {
    name: "مانتو کتان «نسیم»",
    cat: "زنانه · بهاره",
    price: 2_480_000,
    old: 2_950_000,
    tag: "تخفیف",
    tone: "bg-bone",
  },
  {
    name: "پیراهن آستین‌بلند «کاوه»",
    cat: "مردانه · پنبه ۱۰۰٪",
    price: 1_390_000,
    old: null,
    tag: "جدید",
    tone: "bg-accent",
  },
  {
    name: "شلوار پارچه‌ای «آرام»",
    cat: "یونیسکس · فیت راحت",
    price: 1_750_000,
    old: null,
    tag: null,
    tone: "bg-secondary",
  },
];

function DesignSystem() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState("M");
  const [liked, setLiked] = useState<number | null>(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ——— ناوبری دسکتاپ ——— */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-6 px-5">
          <button
            className="rounded-sm p-2 text-foreground transition-colors hover:bg-secondary md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="باز کردن منو"
          >
            <Menu className="size-5" />
          </button>
          <span className="text-lg font-semibold tracking-tight">سُهی</span>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            {["زنانه", "مردانه", "کالکشن جدید", "درباره ما"].map((i) => (
              <a
                key={i}
                href="#"
                className="relative py-1 transition-colors hover:text-foreground after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:scale-x-0 after:bg-olive after:transition-transform hover:after:scale-x-100"
              >
                {i}
              </a>
            ))}
          </nav>
          <div className="me-0 ms-auto flex items-center gap-1">
            <button className="rounded-sm p-2 transition-colors hover:bg-secondary" aria-label="جستجو">
              <Search className="size-5" />
            </button>
            <button className="rounded-sm p-2 transition-colors hover:bg-secondary" aria-label="علاقه‌مندی‌ها">
              <Heart className="size-5" />
            </button>
            <button className="relative rounded-sm p-2 transition-colors hover:bg-secondary" aria-label="سبد خرید">
              <ShoppingBag className="size-5" />
              <span className="absolute end-1 top-1 size-2 rounded-full bg-olive" />
            </button>
          </div>
        </div>
      </header>

      {/* ——— منوی موبایل ——— */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            className="absolute inset-0 bg-primary/30"
            onClick={() => setMenuOpen(false)}
            aria-label="بستن منو"
          />
          <div className="absolute inset-y-0 end-0 w-72 border-s border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <span className="font-semibold">سُهی</span>
              <button onClick={() => setMenuOpen(false)} aria-label="بستن">
                <X className="size-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col">
              {["زنانه", "مردانه", "کالکشن جدید", "درباره ما", "تماس"].map((i) => (
                <a
                  key={i}
                  href="#"
                  className="border-b border-border py-3 text-sm transition-colors hover:text-olive"
                >
                  {i}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-5 pb-24">
        <div className="py-14">
          <p className="text-xs tracking-[0.3em] text-muted-foreground">فاز ۲ — پیش‌نمایش</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            سیستم طراحی سُهی
          </h1>
          <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
            بوتیک مینیمال روشن: آرام، خوانا و بی‌اصطکاک. همه‌چیز حول وضوح اطلاعات و
            سرعت خرید ساخته شده — بدون شلوغی بصری، با یک لهجه رنگی زیتونی.
          </p>
        </div>

        <Section id="colors" title="پالت رنگ" hint="۸ توکن معنایی، همه در oklch">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {palette.map((c) => (
              <div key={c.token} className="space-y-2">
                <div className={cn("h-24 rounded-sm border border-border", c.cls)} />
                <p className="text-sm">{c.name}</p>
                <p dir="ltr" className="text-start text-xs text-muted-foreground">
                  {c.token}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="type" title="تایپوگرافی" hint="وزیرمتن — یک خانواده، سلسله‌مراتب با وزن و اندازه">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground">Display / 48 / SemiBold</p>
              <p className="text-5xl font-semibold tracking-tight">لباسی که هر روز می‌پوشی</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">H2 / 30 / Medium</p>
              <p className="text-3xl font-medium">کالکشن بهار ۱۴۰۵</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Body / 16 / Regular — ارتفاع خط ۸</p>
              <p className="max-w-2xl leading-8">
                پارچه‌ها را از تولیدکننده‌های داخلی انتخاب می‌کنیم و هر تکه پیش از ارسال
                کنترل کیفی می‌شود. اگر سایز مناسب نبود، تا هفت روز بدون هزینه تعویض می‌کنیم.
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Caption / 13 / Muted</p>
              <p className="text-[13px] text-muted-foreground">
                ارسال رایگان برای سفارش‌های بالای {toman(3_000_000)}
              </p>
            </div>
          </div>
        </Section>

        <Section id="buttons" title="دکمه‌ها" hint="گوشه ۴px، بدون سایه، تمرکز روی کنتراست">
          <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              افزودن به سبد
            </button>
            <button className="rounded-sm bg-olive px-6 py-3 text-sm font-medium text-olive-foreground transition-opacity hover:opacity-90">
              تکمیل خرید
            </button>
            <button className="rounded-sm border border-foreground px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary">
              مشاهده کالکشن
            </button>
            <button className="rounded-sm px-6 py-3 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline">
              راهنمای سایز
            </button>
            <button
              disabled
              className="cursor-not-allowed rounded-sm bg-muted px-6 py-3 text-sm font-medium text-muted-foreground"
            >
              ناموجود
            </button>
          </div>
        </Section>

        <Section id="products" title="کارت محصول" hint="نسبت تصویر ۳:۴، قیمت تومانی، انتخاب سریع سایز">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <article key={p.name} className="group">
                <div className={cn("relative aspect-3/4 overflow-hidden rounded-sm", p.tone)}>
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-muted-foreground">
                    تصویر محصول
                  </div>
                  {p.tag && (
                    <span
                      className={cn(
                        "absolute start-3 top-3 rounded-sm px-2 py-1 text-[11px] text-primary-foreground",
                        p.tag === "تخفیف" ? "bg-sale" : "bg-olive",
                      )}
                    >
                      {p.tag}
                    </span>
                  )}
                  <button
                    onClick={() => setLiked(liked === i ? null : i)}
                    aria-label="افزودن به علاقه‌مندی"
                    className="absolute end-3 top-3 rounded-sm bg-card/80 p-2 backdrop-blur transition-colors hover:bg-card"
                  >
                    <Heart
                      className={cn("size-4", liked === i && "fill-sale text-sale")}
                    />
                  </button>
                  <div className="absolute inset-x-3 bottom-3 translate-y-2 rounded-sm bg-card/90 py-2 text-center text-xs opacity-0 backdrop-blur transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    مشاهده سریع
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <p className="text-xs text-muted-foreground">{p.cat}</p>
                  <h3 className="text-sm font-medium">{p.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="persian-num text-sm">{toman(p.price)}</span>
                    {p.old && (
                      <span className="persian-num text-xs text-muted-foreground line-through">
                        {toman(p.old)}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">انتخاب سایز:</span>
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={cn(
                  "size-10 rounded-sm border text-sm transition-colors",
                  size === s
                    ? "border-foreground bg-primary text-primary-foreground"
                    : "border-border hover:border-foreground",
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </Section>

        <Section id="cards" title="کارت‌های محتوایی" hint="نظر مشتری، مزیت برند، وضعیت خالی">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-sm border border-border bg-card p-6">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-clay text-clay" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-7">
                «جنس مانتو دقیقاً همون چیزی بود که تو عکس دیدم. سایز M برام کمی گشاد بود،
                همون روز تعویض شد.»
              </p>
              <p className="mt-4 text-xs text-muted-foreground">مریم ط. — تهران</p>
            </div>
            <div className="rounded-sm border border-border bg-bone p-6">
              <h3 className="text-sm font-medium">تعویض هفت‌روزه</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                اگر سایز یا رنگ مناسب نبود، هزینه ارسال مرجوعی با ماست. کافی است از پنل
                سفارش‌ها درخواست بدهید.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-sm border border-dashed border-border p-6 text-center">
              <ShoppingBag className="size-6 text-muted-foreground" />
              <p className="mt-3 text-sm">سبد خرید شما خالی است</p>
              <p className="mt-1 text-xs text-muted-foreground">
                از کالکشن بهار شروع کنید
              </p>
            </div>
          </div>
        </Section>

        <Section id="forms" title="فرم‌ها" hint="فیلد ساده، خط زیرین در فوکوس زیتونی">
          <div className="grid max-w-2xl gap-5">
            <label className="block">
              <span className="text-sm">نام و نام خانوادگی</span>
              <input
                placeholder="مثلاً سارا احمدی"
                className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-olive"
              />
            </label>
            <label className="block">
              <span className="text-sm">شماره موبایل</span>
              <input
                dir="ltr"
                placeholder="09121234567"
                className="mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-start text-sm outline-none transition-colors focus:border-olive"
              />
            </label>
            <label className="block">
              <span className="text-sm">کد پستی</span>
              <input
                dir="ltr"
                defaultValue="123"
                className="mt-2 w-full rounded-sm border border-destructive bg-card px-4 py-3 text-start text-sm outline-none"
              />
              <span className="mt-2 block text-xs text-destructive">
                کد پستی باید ۱۰ رقم باشد.
              </span>
            </label>
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" className="size-4 accent-olive" defaultChecked />
              خبرنامه کالکشن‌های جدید برایم ارسال شود
            </label>
          </div>
        </Section>

        <Section id="spacing" title="فاصله‌گذاری و شعاع" hint="مقیاس ۴px، شعاع پایه ۴px">
          <div className="flex flex-wrap items-end gap-6">
            {[4, 8, 16, 24, 40, 56].map((s) => (
              <div key={s} className="text-center">
                <div className="bg-olive" style={{ width: s, height: s }} />
                <p className="persian-num mt-2 text-xs text-muted-foreground">{s}px</p>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted-foreground">
          <span>سُهی — بوتیک پوشاک مینیمال</span>
          <span>تهران، خیابان ولیعصر · ۰۲۱-۸۸۵۵۴۴۳۳</span>
        </div>
      </footer>
    </div>
  );
}
