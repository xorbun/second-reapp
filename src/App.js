
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mynav from './components/Navbar';
import Footer from './components/footer';
import Myalert from './components/Alert';
import Fantasybook from "./data/fantasy.json"
import Booklist from './components/Booklist';


function App() 
{
  return (
    <div>
      <header>
        <Mynav/>
        <Myalert/>
     
      </header>
      <main>
      <Booklist books={Fantasybook}/>
      </main>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
