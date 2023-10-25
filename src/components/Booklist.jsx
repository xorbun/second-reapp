import Singlebook from "./Singlebook"


function Booklist(props)
{
    return props.books.map((book)=>
    {
        return (
        <Singlebook immagine={book.img}/>
        )
    })
}
export default Booklist