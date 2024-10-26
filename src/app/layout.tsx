import type { Metadata } from "next";
import Logo from '../assets/logo.svg'
import "./globals.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Coding bunker",
  icons: "/favicon.ico"
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-9 px-10 py-8 md:gap-20 md:py-16">
          <header className="flex w-full flex-col gap-3 md:gap-2 md:flex-row md:justify-between pb-5 md:pb-0">
              <a href="/" className="text-xl">
                <Image src={Logo}  alt="Coding Bunker Logo" height={32} />
              </a>
          </header>
          <main className="flex flex-col">
            {children}
          </main>
        </div>
        
      </body>
      
    </html>
  );
}
