import { Component } from "react";
import Form from 'react-bootstrap/Form';



class AddComment extends Component
{
    state=
    {
        comment:" ",
    }
    render()
    {
        return(
            <Form onSubmit={this.Addcomment}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label></Form.Label>
        <Form.Control as="textarea" rows={4} value= {this.state.comment}
         onChange={(e)=>
        {
            this.setState({
                comment:
                {
                    ...this.state.comment, 
                    comment:e.target.value
                }
            })
            this.handleInputChange("comment",e.target.value)
        }}
        />
        
      </Form.Group>
     
    </Form>
        )
    }
    handleInputChange = (property, value) => {
        this.setState({
          comment: {
            ...this.state.comment,
            [property]: value,
            
          },
        })
      }
Addcomment=function(e)
{
    e.preventDefault()

    fetch("https://striveschool-api.herokuapp.com/api/comments/" +this.props.id ,
    {
        method: 'POST',
        body: JSON.stringify(this.state.comment),
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
export default AddComment