import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/hero.png'
import Button from '@/elements/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* text side */}
      <div className={styles.textSide}>
        <h1 className={styles.title}>Better design for your digital products.</h1>
        <p className={styles.desc}>Turning your Idea into Reality. We bring together the teams from the global tech industry.</p>
        <Button url="/portfolio" title="Our works.." className={'ourWorkBtn'}/>
        
      </div>
      {/* image side */}
      <div className={styles.imageSide}>
        <Image src={Hero} alt='Hero' className={styles.img} priority></Image>
      </div>
    </div>
  )
}
