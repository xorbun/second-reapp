import Singlebook from "./Singlebook"


function Booklist(props)
{
    return props.books.map((book)=>
    {
        return (
        <Singlebook img={book.img}/>
        )
    })
}
export default Booklist