import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: "Diamond Night - Blog",
  description: "Welcome To 'Diamond night' Discover best techs in the whole world!",
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json();
}

const Blog = async () => {
  const posts = await getData()
  return (
    <section className={styles.mainContainer}>
      {posts.map(post=>(
        <Link href={`/blog/${post.id}`}
          className={styles.container} key={post.id}>
          <div className={styles.imgContainer}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt='img'
              width={400}
              height={250}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default Blog