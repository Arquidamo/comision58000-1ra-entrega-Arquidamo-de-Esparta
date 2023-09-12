import 'bootstrap'
import './App.css';
import MiNavbar from './components/navbar.componente';
import Mifooter from './components/footer.component';
import Mein from './components/main.componente'

function App() {
  return (
    <div className="App">
     <MiNavbar/>
     <Mein/>
       
     <Mifooter/> 
    </div>
  );
}

export default App;
