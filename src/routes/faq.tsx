import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  ["چطور سایز مناسب را انتخاب کنم؟", "در صفحه هر محصول راهنمای اندازه همان قطعه را می‌بینید. اندازه یکی از لباس‌های مناسب خود را با جدول مقایسه کنید."],
  ["امکان تعویض وجود دارد؟", "بله، تا ۱۰ روز پس از دریافت، محصول استفاده‌نشده با لیبل سالم قابل تعویض است."],
  ["سفارش چند روزه می‌رسد؟", "تهران ۱ تا ۲ و سایر شهرها ۲ تا ۵ روز کاری. کد رهگیری پس از تحویل به پست ارسال می‌شود."],
  ["محصولات تار کجا تولید می‌شوند؟", "طراحی در استودیوی تهران و تولید در کارگاه‌های منتخب تهران و کرج، در تیراژ محدود انجام می‌شود."],
  ["چطور از لباس نگهداری کنم؟", "دستور دقیق روی لیبل هر قطعه درج شده؛ بیشتر محصولات با آب سرد و دور ملایم قابل شست‌وشو هستند."],
  ["آیا پرداخت در این سایت واقعی است؟", "خیر. این نسخه یک تجربه کامل فرانت‌اند است و هیچ پرداخت یا سفارش واقعی ثبت نمی‌کند."],
];

export const Route = createFileRoute("/faq")({ head: () => ({ meta: [{ title: "پرسش‌های متداول | تار" }, { name: "description", content: "پاسخ پرسش‌های رایج درباره سایز، ارسال، تعویض و نگهداری پوشاک تار." }, { property: "og:title", content: "راهنمای خرید تار" }, { property: "og:description", content: "پاسخ کوتاه و روشن به پرسش‌های خرید از تار." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }] }), component: FaqPage });
function FaqPage() { return <main className="mx-auto max-w-5xl px-5 py-14 sm:px-8"><div className="grid gap-8 border-b border-foreground pb-10 md:grid-cols-2"><div><p className="text-xs text-seal">HELP DESK / 01</p><h1 className="display-type mt-3 text-5xl sm:text-7xl">پرسش‌های<br />متداول</h1></div><p className="self-end leading-8 text-muted-foreground">پاسخ‌های روشن برای انتخاب، سفارش و نگهداری. اگر پاسخ‌تان اینجا نیست، مستقیم برای ما بنویسید.</p></div><Accordion type="single" collapsible className="mt-8">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="py-6 text-start text-base"><span className="me-4 text-xs text-seal">۰{index + 1}</span>{question}</AccordionTrigger><AccordionContent className="max-w-2xl pe-10 text-sm leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-16 flex flex-col items-start justify-between gap-5 border-t pt-8 sm:flex-row sm:items-center"><div><h2 className="text-xl font-medium">هنوز سؤالی مانده؟</h2><p className="mt-1 text-sm text-muted-foreground">تیم تار در روزهای کاری پاسخ می‌دهد.</p></div><Button asChild><Link to="/contact">تماس با ما <ArrowLeft /></Link></Button></div></main>; }