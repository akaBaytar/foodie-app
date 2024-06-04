import { Header, Footer } from '@/components';

import './globals.css';

export const metadata = {
  title: 'Foodie',
  description:
    'Foodie: A vibrant community where food lovers share their favorite recipes and culinary creations. Discover new dishes, swap cooking tips, and connect with fellow food enthusiasts. Join Foodie today and start sharing your love for food!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
