import React from 'react'
import { data } from '../constant/BlogData'
import BlogCard from './BlogCard'


function BlogContainer() {
  // let posts=data.filter((ele)=>ele.posts.filter((post)=>post.likes.length>=2).length>0)
  // console.log(posts);
// posts.map((ele)=>console.log(ele))  
  return (
    <>
     <div className="container">
        <div className="row">
            {
                data.map((data)=> {
                    return <>
                    <BlogCard authorName={data.authorName} id={data.id} posts={data.posts} />
                    
                    </>
                })
            }

        </div>
     </div> 
    </>
  )
}

export default BlogContainer
