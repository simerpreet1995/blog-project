import React from 'react'
import { data } from '../constant/BlogData'

function MostCommented() {

  let posts=data.filter((ele)=>ele.posts.filter((post)=>post.comments.length>=2).length>0)
  console.log(posts);
  return (
    <>
      
    </>
  )
}

export default MostCommented
