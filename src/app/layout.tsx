'use client'

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from '../utils/queryClient';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import './globals.css';
import { fetchCategories } from '@/hooks/useCategories';

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Fetch categories from the server
  const data: Array<string> = await fetchCategories();

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <QueryClientProvider client={queryClient}>
          {data.length>0 && <Navbar categories={data} />}
          <main className="flex-grow">{children}</main>
          <Footer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
