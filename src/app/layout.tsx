import type { Metadata } from "next";
import "@/comp/style/common.scss";
import Header from "@/comp/UIUX/Header";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      
        <main>
          <div className="root">
            <Header />
            <Suspense fallback="loading...">
              {children}
            </Suspense>
            {/* <Footer/> */}
          </div>
        </main>
        </body>
    </html>
  );
}
