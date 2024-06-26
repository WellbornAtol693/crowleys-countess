import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
//import TransitionProvider from '@/components/transitionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Apophis.InQtel',
  description: 'Apophis.InQtel',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100'>
          <div className='h-24'>
            <Navbar />
          </div>
          <div className='h-[calc(100vh-6rem)]'>{children}</div>
        </div>
      </body>
    </html>
  );
}