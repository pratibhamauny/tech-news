import React,{useEffect} from 'react'
import { useGlobalContext } from './Context'


const Posts = () => {
const{hits,nbPages,isLoading,removePost}=useGlobalContext()
//console.log(isLoading)

if(isLoading){
    return(<p>Loading....</p>)
}

  return (
    <div>
      <h2>Posts :</h2>
      <div style={{display:'flexbox'}}>
         {hits.map((hit)=>{
           const {title,author,objectID,url,num_comments}=hit
          // console.log(objectID)
             return(
             <div key={objectID}>
               <div>
               <h4>{title}</h4>
               <p>By {author} | <span>{num_comments} comments </span></p>
               </div>
               <div><a href={url}>Read more</a><div><span><a href="#" onClick={()=>removePost(objectID)}>Remove</a></span></div></div>
               
             </div>)
         })}
      </div>
    </div>
  )
        }

export default Posts
