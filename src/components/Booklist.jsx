import Singlebook from "./Singlebook"
import { Component } from 'react';

class Booklist extends Component
{
    render(props)
    {
    return props.books.map((book)=>
    {
        return (
        <Singlebook immagine={book.img}/>
        )
    })
}
}
export default Booklist