import Footer from '@/components/HomeSection/Footer/Footer'
import Navbar from '@/components/HomeSection/Navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Next Project',
  description: 'This is my first next js project',
}

 const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}

export default RootLayout;