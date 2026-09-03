import blazer from "@/assets/products/tar-charcoal-blazer.jpg";
import redShirt from "@/assets/products/tar-red-shirt.jpg";
import overshirt from "@/assets/products/tar-ivory-overshirt.jpg";
import greenJacket from "@/assets/products/tar-green-jacket.jpg";
import ivoryJacket from "@/assets/products/tar-ivory-jacket.jpg";
import blackCoat from "@/assets/products/tar-black-coat.jpg";

export type Product = {
  id: number;
  slug: string;
  name: string;
  category: "زنانه" | "مردانه";
  type: string;
  price: number;
  oldPrice?: number;
  image: string;
  colors: { name: string; className: string }[];
  sizes: string[];
  badge?: string;
  description: string;
  material: string;
  stock: "موجود" | "رو به اتمام";
  code: string;
};

export const products: Product[] = [
  { id: 1, slug: "line-charcoal-blazer", name: "کت خط زغالی", category: "زنانه", type: "کت", price: 4290000, image: blazer, colors: [{ name: "زغالی", className: "bg-ink" }, { name: "خاکستری", className: "bg-stone" }], sizes: ["۳۶", "۳۸", "۴۰", "۴۲"], badge: "انتخاب سردبیر", description: "کت ساختارمند با شانه دقیق و فرم آزاد؛ برای ترکیب‌های رسمی و روزمره.", material: "فاستونی سبک با آستر ویسکوز", stock: "موجود", code: "TA-W01" },
  { id: 2, slug: "vaav-crimson-shirt", name: "شومیز نامتقارن واو", category: "زنانه", type: "شومیز", price: 2380000, oldPrice: 2740000, image: redShirt, colors: [{ name: "زرشکی", className: "bg-seal" }, { name: "مشکی", className: "bg-ink" }], sizes: ["۳۶", "۳۸", "۴۰", "۴۲", "۴۴"], badge: "۱۳٪ تخفیف", description: "شومیزی با خط مورب و ریزش نرم که به‌تنهایی مرکز هر استایل است.", material: "کرپ تنفس‌پذیر", stock: "موجود", code: "TA-W02" },
  { id: 3, slug: "paper-texture-overshirt", name: "اورشرت بافت کاغذ", category: "مردانه", type: "پیراهن", price: 2890000, image: overshirt, colors: [{ name: "سفید کاغذی", className: "bg-paper" }, { name: "سنگی", className: "bg-stone" }], sizes: ["M", "L", "XL", "XXL"], badge: "تازه", description: "اورشرتی با بافت برجسته و فیت راحت؛ یک لایه کاربردی برای چهار فصل.", material: "پنبه با بافت ژاکارد", stock: "موجود", code: "TA-M01" },
  { id: 4, slug: "forest-utility-jacket", name: "ژاکت کار جنگل", category: "مردانه", type: "ژاکت", price: 3650000, image: greenJacket, colors: [{ name: "سبز جنگلی", className: "bg-forest" }, { name: "مشکی", className: "bg-ink" }], sizes: ["M", "L", "XL"], badge: "رو به اتمام", description: "برداشت شهری از لباس کار با چهار جیب کاربردی و یقه ساختارمند.", material: "کتان کج‌راه شسته‌شده", stock: "رو به اتمام", code: "TA-M02" },
  { id: 5, slug: "negative-space-jacket", name: "کت فضای منفی", category: "زنانه", type: "کت", price: 3980000, image: ivoryJacket, colors: [{ name: "شیری", className: "bg-paper" }, { name: "قرمز مُهری", className: "bg-seal" }], sizes: ["۳۶", "۳۸", "۴۰", "۴۲"], badge: "تازه", description: "کت کوتاه با برش هندسی که حجم لباس زیرین را قاب می‌گیرد.", material: "گاباردین پنبه‌ای", stock: "موجود", code: "TA-W03" },
  { id: 6, slug: "midnight-long-coat", name: "پالتو نیمه‌شب", category: "مردانه", type: "پالتو", price: 5490000, oldPrice: 5980000, image: blackCoat, colors: [{ name: "مشکی", className: "bg-ink" }, { name: "دودی", className: "bg-stone" }], sizes: ["M", "L", "XL"], badge: "۸٪ تخفیف", description: "پالتوی بلند و سبک با خط شانه نرم؛ رسمی بدون آن‌که خشک به نظر برسد.", material: "پشم سبک و پلی‌ویسکوز", stock: "رو به اتمام", code: "TA-M03" },
  { id: 7, slug: "frame-wide-trousers", name: "شلوار واید قاب", category: "زنانه", type: "شلوار", price: 2190000, image: blazer, colors: [{ name: "زغالی", className: "bg-ink" }, { name: "کرم", className: "bg-paper" }], sizes: ["۳۶", "۳۸", "۴۰", "۴۲"], description: "شلوار واید با خط اتوی ماندگار و کمر خوش‌فرم برای استفاده روزانه.", material: "فاستونی چهار فصل", stock: "موجود", code: "TA-W04" },
  { id: 8, slug: "margin-relaxed-trousers", name: "شلوار آزاد حاشیه", category: "مردانه", type: "شلوار", price: 2450000, image: overshirt, colors: [{ name: "زغالی", className: "bg-stone" }, { name: "مشکی", className: "bg-ink" }], sizes: ["M", "L", "XL", "XXL"], description: "شلوار آزاد با فاق راحت و لبه تمیز؛ برای حرکت در روزهای شلوغ.", material: "پنبه و لیوسل", stock: "موجود", code: "TA-M04" },
];

export const productTypes = Array.from(new Set(products.map((product) => product.type)));
export const formatPrice = (value: number) => `${value.toLocaleString("fa-IR")} تومان`;
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);