import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })


export const metadata = {
  title: "Reflect",
  description: "A Journaling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`${inter.className}`}>
          <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0"/>
          {/* header */}
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors/>

          {/* footer */}
          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="mx-auto px-4 text-center text-gray-900">
              <p>Made by Sujit😁</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
