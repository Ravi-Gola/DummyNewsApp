import React, { useState } from 'react'

const NewsItem = (props) => {
    const {news}=props
    const [readMode,setreadMode]=useState("More");
    const [display,setdisplay]=useState("none");
    const handelRead=()=>{
         if(readMode==="More"){
          setdisplay("block")
          setreadMode("Less")
         }
         else{
          setdisplay("none");
          setreadMode("More")
         }

    }
  return (
    <div>
      
      <div className="card my-5">
        <h3>News {news.id}</h3>
  <img src={news.poster} className="card-img-top" height="300px" width="500px" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{news.title}</h5>
    <p className="card-text">{news.description}</p>
    <p className="card-text" style={{display:`${display}`}}>{news.moreInfo}</p>
    <p className="card-text text-primary card-link" onClick={handelRead} style={{cursor:"pointer"}}>Read {readMode}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
    </div>
  )
}

export default NewsItem
