import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pop-card bg-candy-pink px-8 py-12 text-center">
        <div className="text-6xl">🍩</div>
        <h1 className="heading-display mt-4 text-5xl text-plum">404</h1>
        <h2 className="mt-4 font-display text-xl font-extrabold uppercase text-plum">
          This page got eaten
        </h2>
        <p className="mt-2 text-sm font-medium text-plum/80">
          The treat you're looking for doesn't exist (yet).
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="pop-btn inline-flex items-center justify-center bg-candy-yellow px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="pop-card max-w-md bg-candy-lilac px-8 py-12 text-center">
        <div className="text-6xl">🙈</div>
        <h1 className="heading-display mt-4 text-2xl text-plum">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm font-medium text-plum/80">
          Something went wrong on our end. Try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="pop-btn bg-candy-yellow px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
          >
            Try again
          </button>
          <a
            href="/"
            className="pop-btn bg-card px-5 py-2.5 font-display text-sm font-extrabold uppercase tracking-wide text-plum"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sweeet Network — Sugar, Spice, Everything Nice!" },
      {
        name: "description",
        content:
          "Sweeet Network is a community-led food and pop-culture media platform from Lagos, Nigeria. Editorials, games, community debates and merch — a little culture, a little chaos, a lot of Sweeet.",
      },
      { name: "author", content: "Sweeet Network and Media Enterprises" },
      { property: "og:title", content: "Sweeet Network — Sugar, Spice, Everything Nice!" },
      {
        property: "og:description",
        content:
          "Food, pop culture and community from Lagos. The Digest, Sweeet Box, the Playground and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=DM+Sans:opsz,wght@9..40,400..1000&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-body">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  );
}
