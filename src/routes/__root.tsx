import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/shop/site-shell";
import { StoreProvider } from "@/lib/shop/store";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <main className="flex min-h-[70vh] items-center justify-center px-5"><div className="text-center"><span className="display-type text-[10rem] leading-none text-seal">۴۰۴</span><h1 className="mt-2 text-3xl font-semibold">این صفحه از مجموعه خارج شده</h1><p className="mt-3 text-muted-foreground">نشانی را دوباره بررسی کنید یا به ویترین تار برگردید.</p><Button className="mt-7" asChild><Link to="/">بازگشت به خانه</Link></Button></div></main>;
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <main className="flex min-h-screen items-center justify-center bg-background px-5"><div className="max-w-md text-center"><p className="text-sm text-seal">خطای موقت</p><h1 className="mt-3 text-3xl font-semibold">این صفحه باز نشد</h1><p className="mt-3 text-muted-foreground">لطفاً دوباره تلاش کنید.</p><div className="mt-7 flex justify-center gap-2"><Button onClick={() => { router.invalidate(); reset(); }}>تلاش دوباره</Button><Button variant="outline" asChild><a href="/">صفحه اصلی</a></Button></div></div></main>;
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Lalezar&family=Vazirmatn:wght@300;400;500;600;700;800&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { return <html lang="fa" dir="rtl"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><StoreProvider><SiteShell><Outlet /></SiteShell><Toaster position="bottom-center" richColors /></StoreProvider></QueryClientProvider>; }