import look1 from "@/assets/products/look-1.jpg";
import look2 from "@/assets/products/look-2.jpg";
import look3 from "@/assets/products/look-3.jpg";

export type Product = {
  id: number; slug: string; name: string; category: "زنانه" | "مردانه"; type: string;
  price: number; oldPrice?: number; image: string; colors: string[]; sizes: string[];
  badge?: string; description: string; material: string;
};

export const products: Product[] = [
  { id: 1, slug: "nasim-linen-coat", name: "مانتو لینن نسیم", category: "زنانه", type: "مانتو", price: 2480000, oldPrice: 2950000, image: look1, colors: ["استخوانی", "زیتونی"], sizes: ["S", "M", "L"], badge: "۱۶٪ تخفیف", description: "مانتویی سبک با برش آزاد برای روزهای روشن و آرام.", material: "لینن و پنبه طبیعی" },
  { id: 2, slug: "aram-relaxed-set", name: "ست آزاد آرام", category: "زنانه", type: "ست", price: 3190000, image: look2, colors: ["زغالی", "زیتونی"], sizes: ["S", "M", "L", "XL"], badge: "جدید", description: "ست راحت و مینیمال با ایستایی نرم و دوخت تمیز.", material: "لیوسل و پنبه" },
  { id: 3, slug: "kaveh-knit-polo", name: "پولوشرت بافت کاوه", category: "مردانه", type: "پیراهن", price: 1590000, image: look3, colors: ["شیری", "خاکستری"], sizes: ["M", "L", "XL"], description: "بافت سبک و تنفس‌پذیر برای استایل روزمره‌ی آراسته.", material: "پنبه ۱۰۰٪" },
  { id: 4, slug: "rooz-olive-shirt", name: "پیراهن زیتونی روز", category: "مردانه", type: "پیراهن", price: 1890000, image: look1, colors: ["زیتونی", "کرم"], sizes: ["M", "L", "XL", "XXL"], badge: "پرفروش", description: "پیراهنی کاربردی با فرم راحت و جزئیات کمینه.", material: "کتان شسته‌شده" },
  { id: 5, slug: "saye-wide-trousers", name: "شلوار واید سایه", category: "زنانه", type: "شلوار", price: 1750000, oldPrice: 1950000, image: look2, colors: ["زیتونی", "زغالی"], sizes: ["S", "M", "L"], badge: "۱۰٪ تخفیف", description: "شلوار واید با کمر راحت و ریزش پارچه‌ی طبیعی.", material: "ویسکوز و لینن" },
  { id: 6, slug: "sahar-stone-trousers", name: "شلوار پارچه‌ای سحر", category: "مردانه", type: "شلوار", price: 2150000, image: look3, colors: ["سنگی", "زغالی"], sizes: ["M", "L", "XL"], description: "فیت مستقیم، راحت و مناسب استایل نیمه‌رسمی.", material: "پشم سبک و پلی‌ویسکوز" },
];
export const formatPrice = (value: number) => `${value.toLocaleString("fa-IR")} تومان`;
export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
