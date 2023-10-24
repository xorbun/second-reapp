
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Mynav from './components/Navbar';
import Footer from './components/footer';
import Myalert from './components/Alert';
import Mybooks from './components/Allthebooks';



function App() 
{
  return (
    <div>
      <header>
        <Mynav/>
        <Myalert/>
        <Mybooks/>
      </header>
      <main>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
