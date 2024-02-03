"use client"
import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import useSWR from 'swr'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RedirectToLogin } from './(auth)/RedirectToLogin';

const Dashboard = () => {

  const [err, setErr] = useState('');
  
  const session = useSession()
  const router = useRouter()
  const fetcher = (...args) => fetch(...args).then(res=>res.json())
  
  const {data, mutate, error, isLoading} = useSWR(`api/posts?username=${session?.data?.user.name}`, fetcher)

  useEffect(() => {
    if (session.status === 'unauthenticated') {
      RedirectToLogin(router)
    }
  }, [session.status, router]);


  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    // Validate image URL using the regular expression
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
    if (!urlRegex.test(image)) {
      setErr('Invalid image URL. Please enter a valid URL.');
      return;
    }

    try{

      // Delay the form submission to allow time for error state to update
      // await new Promise((resolve) => setTimeout(resolve, 0));
      await fetch("api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username: session.data.user.name
        })
      });
      mutate();
      e.target.reset()
    }catch(err){
      throw new Error("Somthing Wrong in DB while Create Post!")
    }
  }
  
  const handleDelete = async (id)=>{
    try{
      await fetch(`api/posts/${id}`,{
        method: "DELETE",
      });
      mutate()
    }catch(err){
      throw new Error("Somthing Wrong in DB while Delete Post!")
    }
  }

  if(session.status === "authenticated"){
    return (
      <section className={styles.container}>
        <div className={styles.posts}>
          {isLoading?"Loading.." 
          : data?.map(post=>(
              <div className={styles.post} key={post._id}>
                <div className={styles.imgContainer}>
              <Image src={post.image} alt={post.title} width={200} height={150} priority/>
              </div>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <span className='delete' onClick={()=>handleDelete(post._id)}>X</span>
            </div>
          ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input 
          type="text" 
          placeholder='Title' 
          className={styles.input}/>
          <input 
          type="text" 
          placeholder='Description' 
          className={styles.input}/>
          <input 
          type="text" 
          placeholder='Image Url' 
          className={styles.input}
          onChange={() => setErr('')} /* Clear error message on input change *//>
          {err && <p style={{ color: 'red' }}>{err}</p>}
          <textarea placeholder='Content' className={styles.textArea} cols="30" rows="10"></textarea>
          <button className={styles.btn}>Send</button>
        </form>
      </section>
    )
  }
}

export default Dashboard