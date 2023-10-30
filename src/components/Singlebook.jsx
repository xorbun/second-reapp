
import Card from 'react-bootstrap/Card';

import { Component } from 'react';
import CommentArea from './CommentArea';



class Singlebook extends Component 
{
    state=
    {
        selected: false,
    }

    Selectedbook=() =>
    {
        this.setState({
            selected: !this.state.selected
        })
    }
  
    render()
    {    
        return(
        <Card  className={this.state.selected ? 'red-border' :''} key={this.props.asin}>
            <Card.Body >
                <img src={this.props.immagine} alt="boh" width="150px" onClick={()=>
                    {
                        this.props.test2(this.props.asin)
                       
                    } 
                    }/>
                {this.state.selected &&<CommentArea id={this.props.asin} 
                
                />}
                
                
            </Card.Body>
        </Card>
        )
    }
}
export default Singlebook