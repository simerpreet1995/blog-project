import React from 'react'
import { data } from '../constant/BlogData'

function MostLiked() {

  let posts=data.filter((ele)=>ele.posts.filter((post)=>post.likes.length>=2).length>0)
  console.log(posts[0].posts.filter((data)=> data.likes.length>=2));
  
  return (
    <>
     
    </>
  )
}

export default MostLiked
