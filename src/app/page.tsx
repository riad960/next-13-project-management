import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { NextFont } from '@next/font'

const inter:NextFont = Inter({ subsets: ['latin'] })

export default function Home():JSX.Element {
  return (
    <main className={styles.main}>
     <div className="">Hi</div>
    </main>
  )
}
