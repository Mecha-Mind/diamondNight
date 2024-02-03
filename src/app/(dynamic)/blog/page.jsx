import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Diamond Night - Services",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {cache: "no-store",});

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json();
}
const Blog = async () => {
  const data = await getData()
  return (
    <section className={styles.mainContainer}>
      {data.map(post=>(
        <Link href={`/blog/${post._id}`}
          className={styles.container} key={post._id}>
          <div className={styles.imgContainer}>
            <Image
              src={post.image}
              alt='img'
              width={400}
              height={250}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.desc}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Blog