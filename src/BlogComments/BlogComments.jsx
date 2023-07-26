import React from "react";
import { useLocation } from "react-router-dom";

function BlogComments() {
  const location = useLocation();
  let { state } = location;
  console.log(state);
  let { comments, likesCount, authorName, title, desc } = state;
  // console.log(comments);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0 ">
            <div className="card bg-dark text-white-50 py-5 justify-items-center align-items-center">
      <h2>Post Title :{title}</h2>
      <p style={{padding: "0 3.5rem"}}>{desc}</p>
      <br />

    
      <p> Total Likes :{likesCount}</p>
      <p>Author Name:{authorName}</p>

      </div>
          </div>
        </div>
      </div>

{/* ============================ */}
      <div className="container">
        <div className="row py-3">
          <div className="col-md-12 mt-5">
          {comments.map((data) => {
        return (
          <>
            <h3>Comments By: {data.by}</h3>
            <br />
            <h5>Comments : {data.title}</h5>
            <br />
          </>
        );
      })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogComments;
