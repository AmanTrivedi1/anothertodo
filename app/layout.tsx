import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Anothertodo",
  description: "Todo app but intregate with Ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="">
          {" "}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="">{children}</div>
          </ThemeProvider>
        </div>{" "}
      </body>
    </html>
  );
}
