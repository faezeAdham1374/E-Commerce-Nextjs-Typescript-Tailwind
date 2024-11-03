import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { config } from '@fortawesome/fontawesome-svg-core'
import './globals.css';  
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
