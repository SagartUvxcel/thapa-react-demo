import React from 'react';
import { useParams, useLocation } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Blog = () => {

  const { name } = useParams();
  const location = useLocation();
// const history = useHistory();

// console.log(history);
  return (
    <>
      <div>Blog {name}</div>


      <h1>My location is {location.pathname}</h1>
      {location.pathname === "/Blog/Sagar%20Tilekar" ? <button onClick={()=>{alert("clicked")}}>Click Me</button> : null}
    </>
  )
}

export default Blog