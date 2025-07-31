import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify - Music for everyone',
  description: 'Spotify is a digital music service that gives you access to millions of songs, podcasts and videos from artists all over the world.',
  keywords: 'music, streaming, spotify, songs, podcasts, playlists',
  openGraph: {
    title: 'Spotify - Music for everyone',
    description: 'Spotify is a digital music service that gives you access to millions of songs, podcasts and videos from artists all over the world.',
    images: ['https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?auto=compress&cs=tinysrgb&w=1200'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}