
import AddComment from "./Addcomment"
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
const CommentArea=(props)=>
{
 

  const [comments,setcomments]= useState([])
 

useEffect(() => {
    if(props.asin)
    {
        getcomments()
        
    }
    
  }, [props.asin])

  const deleteComment=(id)=>
{
   
    fetch('https://striveschool-api.herokuapp.com/api/comments/' + id,

    {
        method: "DELETE",
        headers:
        {
            'Content-type': 'application/json',
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
            throw new Error("errore")
        }
    })
    .then((data)=>
    {
        console.log("commento cancellato")
        getcomments()
        
    })
    .catch((err)=>
    {
        console.log(err)
    })
}
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
  setcomments(data)
})
.catch((err)=>
{
    console.log(err)
})
 
}

   return(
    <>
       <AddComment idasin={props.asin}/>
       <ListGroup>
        {comments.map((commento)=>
        {
            return(
                
                <ListGroup.Item key={commento._id}> 
                    {commento.comment} 
                    {console.log(commento._id)}
                    <button type="submit" onClick={()=>
                    {deleteComment(commento._id)}}>cancella</button> 
                    </ListGroup.Item>
            )
        })}
        </ListGroup>
    </> 
   )

}
export default CommentArea