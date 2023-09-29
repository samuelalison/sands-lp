// import Image from 'next/image'
// import styles from './page.module.css'
import { Compare } from '@/components/compare/Compare'
import { Connect } from '@/components/connect/Connect'
import { Customers } from '@/components/customers/Customers'
import { Hero } from '@/components/hero/Hero'
import Navbar from '@/components/navbar/Navbar'
import { Products } from '@/components/products/Products'


export default function Home() {
  return (
    <main>
    <Navbar />
    <Hero />
    <Products />
    <Compare />
    <Connect />
    <Customers />
    </main>
  )
}
