import React, { useEffect,useState} from 'react'
import { useGlobalContext } from './Context';

//https://uiball.com/ldrs/

//loading 
import { spiral } from 'ldrs'

spiral.register()




const News = () => {
    
//object destructuring
const {hits,isLoading,removePost}=useGlobalContext();



if(isLoading)
return <div className='load-class'>
  <l-spiral
size="80"
speed="0.9" 
color="#fc00b1" 
></l-spiral>
</div>;



  return (
      <>
       <div className='news-div'>
      {hits.map((curPost)=>{

        //object destructuring
        const {title,author,objectID,url,num_comments}=curPost;
        return (
        <div className='card' key={objectID}>
          <h2>{title}</h2>
          <p>By <span>{author}</span>|<span>{num_comments}</span> comments</p>
          <div className='card-button'>
            <a href={url} target="_blank">
              Read More
            </a>

            <a href="#" onClick={()=>{
              removePost(objectID);
            }}>
              Remove
            </a>
          </div>
        </div>
        )
      })}
      </div>
      </>

   
  );
}

export default News;