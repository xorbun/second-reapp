
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mynav from './components/Navbar';
import Footer from './components/footer';
import Myalert from './components/Alert';
import Fantasybook from "./data/fantasy.json"
import Booklist from './components/Booklist';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommentArea from './components/CommentArea';
import {useState } from 'react';


const App= ()=>
{
  
  const [commenti, setcommenti]=useState("")
  
  const changeAsin=(asin)=>
  {
      setcommenti(asin)
  }
 
  return (
    <div>
      <header>
        <Mynav/>
        <Myalert/>
     
      </header>
      <main>
        <Container>
          <Row>
            <Col>
              <Booklist books={Fantasybook} test={changeAsin}/>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CommentArea asin={commenti}/>
            </Col>
          </Row>
        </Container>
      
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
  
}

export default App;
