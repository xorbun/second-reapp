import Singlebook from "./Singlebook";


function Booklist(props)
{
    props.books.map(book=>
    {   
        return(
            <Singlebook img={book.img}/>
        )
    })
}
export default Booklist