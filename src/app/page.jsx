import styles from './page.module.css'
import Landing from '@/components/landing/Landing'
import Testimonial from '@/components/testimonial/Testimonial'
import Carousel from '@/components/carousel/Carousel'
import Contact from '@/components/contact/Contact'
import InfiniteScrollAnimation from '@/components/testi2/InfiniteScrollAnimation'
import AboutUs from '@/components/aboutUs/AboutUs'
import Link from 'next/link'


export default function Home() {
  return (
    <section className={styles.main}>
      <Landing/>
      <AboutUs/>
      <Link href={"/about"}>About</Link>
      <Testimonial/>
      <Carousel/>
      <Contact/>
      <InfiniteScrollAnimation/>
    </section>
  )
}
