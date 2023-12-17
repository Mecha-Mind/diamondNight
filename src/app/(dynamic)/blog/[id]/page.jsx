import { notFound } from 'next/navigation';
import styles from './page.module.css';
import Image from 'next/image';

// Define the function to fetch data
async function getData(postId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { cache: 'no-store' });

  if (!res.ok) {
    return notFound()
  }
  return res.json();
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
            {item.body}
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
              priority
            />
            <span className={styles.authorname}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt minima corrupti quisquam tempore a accusantium quaerat at? Qui aliquam explicabo dolor, numquam ea eligendi, accusantium rem, modi nihil debitis quos.
            <br /><br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt harum adipisci iste illum autem quidem dolores. Sed odit, sapiente, quia libero numquam expedita impedit, minima suscipit facere obcaecati ad aspernatur.
            <br />
            <br />
            Sapiente ex incidunt animi iste consequatur dicta odit nostrum ratione cumque rem eveniet quo veritatis delectus quia assumenda, libero nesciunt quae aspernatur eaque a recusandae natus ipsa. Officia, dolorum vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aspernatur facilis neque corrupti dolorem itaque officiis saepe, et dolores illo sequi nostrum minus fugiat sint dolore sit reiciendis, illum dignissimos.
          </p>
      </div>
    </section>
  );
};


export default Post;
