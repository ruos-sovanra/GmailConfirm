import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import NavbarComponent from "@/Components/navbar/NavbarComponent";
import {ErrorBoundary} from "next/dist/client/components/error-boundary";
import {Suspense} from "react";
import Loading from "@/app/(user)/loading";
import Error from "@/app/(user)/error";
import {inter, suwannaphum,localCustomFont} from "./fonts";

export const metadata = {
    title: 'ASURA KING OF HELL',
    openGraph: {
        title: 'Asura is the king of hell',
        description: 'So you wanna play come on and play',
        images: "https://i.pinimg.com/564x/70/b5/e2/70b5e2da9639788b3f68af857f3b9c8a.jpg"
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${suwannaphum.variable} ${inter.variable} ${localCustomFont.variable} h-screen flex flex-col`}
      >
      <header>
          <NavbarComponent/>
      </header>
      <ErrorBoundary errorComponent={Error}>
          <Suspense fallback={<Loading/>}>{children}</Suspense>
      </ErrorBoundary>
      </body>
      </html>
  );
}
