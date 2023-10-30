import { Component } from "react"
import AddComment from "./Addcomment"
import ListGroup from 'react-bootstrap/ListGroup';

class CommentArea extends Component 
{
  state=
  {
    comments:[]
  }

 
 componentDidUpdate(prevProps)
 {
    if (prevProps.asin !==this.props.asin)
    {
        this.getcomments()
    }
 }

 getcomments=()=>
{
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin,
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
  this.setState({comments:data})
  
})
.catch((err)=>
{
    console.log(err)
})
 
}
render()
{
   return(
    <>
       <AddComment idasin={this.props.id}/>
       <ListGroup>
        {this.state.comments.map((commento)=>
        {
            return(
                
                <ListGroup.Item key={commento._id}>{commento.comment}</ListGroup.Item>
            )
        })}
        </ListGroup>
    </> 
   )
}
}
export default CommentArea