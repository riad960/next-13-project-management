import Head from "../head"
import { Inter } from "@next/font/google";
import '../../styles/globals.css'
import GlassPanel from "@/components/GlassPanel"
const inter = Inter({
    variable: "--font-inter",
  });
const AuthRootLayout = ({children}:any) => {
  return (
    <html className={inter.variable} >
        <Head/>
        <body className="h-screen w-screen p-6 rainbow">
           <GlassPanel className='w-full h-full flex items-center justify-center'>
            {children}
           </GlassPanel>
        </body>
    </html>
  )
}

export default AuthRootLayout
