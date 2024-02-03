import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';


// Define the function to fetch data
async function getData(postId) {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, { cache: 'no-store' });

  if (!res.ok) {
    return notFound()
  }
  return res.json();

}


// dynamic meta data
export async function generateMetadata({ params }) {
  const post = await getData(params.id)

  return {
    
    title: post.title,
    desc: post.desc,
    
  }
}



// Define the BlogPost component
const Post = async ({params}) => {
  const item = await getData(params.id)
  
  return (
    <section className={styles.mainContainer}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {item.title}
          </h1>
          <p className={styles.desc}>
            {item.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={item.image}
              alt={item.username}
              width={40}
              height={40}
              className={styles.avatar}
              priority
            />
            <span className={styles.authorname}>{item.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={item.image}
            alt="post image"
            width={600}
            height={400}
            className={styles.image}
            priority
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
            {item.content}
          </p>
      </div>
    </section>
  );
};


export default Post;
