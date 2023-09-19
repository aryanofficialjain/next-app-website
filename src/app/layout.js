import Nav from './Components/Nav'
import './globals.css'
import axios from 'axios';




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}</body>
        
    </html>
  )
}
