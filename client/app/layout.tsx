// app/(auth)/layout.tsx atau app/layout.tsx
import TopBarNav from "@/components/top-bar";
import ContainerContextClient from "@/context/context";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import { Metadata } from "next";
import { Suspense } from "react";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "CAKRA",
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookie = await (await cookies()).get("access_token");
  return (
    <html suppressHydrationWarning lang="id">
      <body suppressHydrationWarning>
        <Suspense>
          <ContainerContextClient user={cookie}>
            <AppRouterCacheProvider>
              <TopBarNav />
              <div className="mt-10">{children}</div>
            </AppRouterCacheProvider>
          </ContainerContextClient>
        </Suspense>
      </body>
    </html>
  );
}
