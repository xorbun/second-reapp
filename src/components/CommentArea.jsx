import { Component } from "react"
import AddComment from "./Addcomment"

class CommentArea extends Component 
{
 render()
 {
    return(
        <AddComment/>
    )
 }
 componentDidMount()
 {
    this.getcomments()
 }

 getcomments=function()
{
    fetch("https://striveschool-api.herokuapp.com/api/comments/ "+ this.props.id,
    {
        headers:
        {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTUxNmY2ZTNkZDAwMTQ5NWU0MzkiLCJpYXQiOjE2OTgzMjE2ODYsImV4cCI6MTY5OTUzMTI4Nn0.B92g9Ym4d32b3wyk8u_T2-mY4NumLeAGsBperWtpC18"
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
    
})
.catch((err)=>
{
    console.log(err)
})
 
}
}
export default CommentArea