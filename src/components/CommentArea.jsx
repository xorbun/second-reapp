
import AddComment from "./Addcomment"
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
const CommentArea=(props)=>
{
 

  const [comments,setcomments]= useState([])
 

useEffect(() => {
    getcomments()
  }, [props.asin])

 const getcomments=()=>
{
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin,
    {
        headers:
        {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTUxNmY2ZTNkZDAwMTQ5NWU0MzkiLCJpYXQiOjE2OTgzNDY4MDgsImV4cCI6MTY5OTU1NjQwOH0.3sfhByXEpN3LCTnEo9VG9yREEZ31raucETJyMHhtlVE"
        }
    })

.then((res)=>
{
    if(res.ok)
    {
        console.log("ok")
        return res.json()
    }
    else
    {
        throw new Error("niente")
    }
})
.then((data)=>
{
  console.log(data)
//   
  setcomments(data)
  
})
.catch((err)=>
{
    console.log(err)
})
 
}

   return(
    <>
       <AddComment idasin={props.id}/>
       <ListGroup>
        {comments.map((commento)=>
        {
            return(
                
                <ListGroup.Item key={commento._id}>
                    {commento.comment}
                    </ListGroup.Item>
            )
        })}
        </ListGroup>
    </> 
   )

}
export default CommentArea