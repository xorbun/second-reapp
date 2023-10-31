
import Card from 'react-bootstrap/Card';

import {  useState } from 'react';




const Singlebook=(props)=> 
{
    
    const [selected,setselected]=useState(false)
    const Selectedbook=() =>
    {
        
        setselected(!selected)
    }
  
  
        return(
        <Card  className={selected ? 'red-border' :''} key={props.asin}>
            <Card.Body >
                <img src={props.immagine} alt="boh" width="150px" 
                onClick={()=>
                    {
                        Selectedbook()
                        props.test2(props.asin)
                    } 
                }/>
            </Card.Body>
        </Card>
        )
    
}
export default Singlebook