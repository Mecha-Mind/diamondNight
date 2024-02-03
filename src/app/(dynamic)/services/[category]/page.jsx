import React from 'react'
import styles from './page.module.css';
import Image from 'next/image';
import { items } from "./data"
import { notFound } from 'next/navigation'
import Link from 'next/link';

const getData = (cat)=>{
  const data = items[cat]

  if(data){
    return data;
  }

  return notFound()

}

const Category = ({params}) => {
  const data = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item=>(
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Link url="/services" title="See More.." />
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="Category Image"
              className={styles.img}
              width={500}
              height={400}
              priority
              />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Category