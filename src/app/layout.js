import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500", "700"], variable: "--font-roboto" })

export const metadata = {
  title: 'My Next Project',
  description: 'This is my first next js project',
}

 const  RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
        </body>
    </html>
  )
}

export default RootLayout;