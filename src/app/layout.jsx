import { Inter } from 'next/font/google'
import './globals.css'
import AgendarLayout from './agendar/agendar_layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BioCentro',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}
