import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BlogPost() {
    const [asc, setAsc] = useState([])

    const navigate = useNavigate()

    const location = useLocation();
    let {state} = location;
    // console.log(state);
    let {posts,authorName} = state;
    // console.log(posts.map(data => data.likes));
    console.log(posts);



    let postlikes = posts.map(data => data.likes.length);
    // console.log(postlikes);
    let totalCount = postlikes.reduce((a, b)=> a+b ,0);
    console.log(totalCount);


    const handleNavigate = (comments, likes, title, desc ) => {
      let likesCount = likes.length
        // console.log(comments);
        navigate("/comments",  {
            state: {
                comments,
                likesCount,
                authorName,
                title, 
                desc
                
            }
          }
        )
    }


    const ascFunc = () => {
      let ascData = posts.map((data) => data.likes.length)
      console.log(ascData)
      let ascLikes = ascData.sort((a,b) => a.likes - b.likes)
      
    }


  return (
    <>
    <div className="container mb-5">
        <div className="row justify-content-center align-items-center justify-items-center">
    <div className="col-md-4 ">
        <div className="card bg-dark text-white-50 ">
        <h1>{authorName}</h1>
        totalLikes : {totalCount}
        <br />
        totalPost : {posts.length}
        
   

        </div>
    </div>
    </div>
    </div>



      <div className="container filter-buttons">
        <div className="row">
          <div className="col-12">
          
          <Button variant="primary" onClick={()=>ascFunc()}>Ascending By Likes</Button>
          <Button variant="primary">Descending By Likes</Button>

  
          </div>
        </div>
      </div>

      {/* {
          totalCount.sort((a,b) => a.likes.length - b.likes.length)
      } */}


    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Post Name</th>
          <th>Date</th>
          <th>Status</th>
          <th>Total Likes</th>
        </tr>
      </thead>
      <tbody>

        {
            posts.map(ele => {
                return <>
                <tr>
                    <td onClick={()=> handleNavigate(ele.comments, ele.likes, ele.title, ele.desc)}>{ele.title}</td>
                    <td></td>
                    <td>{ele.likes.map(data => data.status).join(" & ")}</td>

                    <td>{ele.likes.length}</td>
                </tr>
                
                </>
            })
        }
 
      </tbody>
    </Table>




      
      


   
    </>
  )
}

export default BlogPost




