import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment=(props)=>  
{
 
  const [comment, setcomment]= useState({
    comment:"",
    rate:1,
    elementId:props.idasin,
  })

   const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTUxNmY2ZTNkZDAwMTQ5NWU0MzkiLCJpYXQiOjE2OTgzNDY4MDgsImV4cCI6MTY5OTU1NjQwOH0.3sfhByXEpN3LCTnEo9VG9yREEZ31raucETJyMHhtlVE',
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        setcomment({
          comment: '',
          rate: 1,
          elementId:props.idasin,
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }

  
    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci qui il testo"
              value={comment.comment}
              onChange={(e) =>
                setcomment({
                  ...comment,
                  comment: e.target.value
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={comment.rate}
              onChange={(e) =>
                setcomment({
                  ...comment,
                  rate:e.target.value
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  
}

export default AddComment
