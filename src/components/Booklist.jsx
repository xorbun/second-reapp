import Singlebook from "./Singlebook"
import { Component } from "react"

class Booklist extends Component
{
    render()
    {
        return this.props.books.map((book)=>
        {
            return <Singlebook key={book.asin} immagine={book.img}/>
        })
    }
}
export default Booklist