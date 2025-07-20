
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Pagina2 from './paginas/pagina2';
import Pagina1 from './paginas/pagina1';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagina1 />} />
        <Route path="/pagina1" element={<Pagina1 />} />
        <Route path="/pagina2" element={<Pagina2 />} />
        
      </Routes>
    </Router>
  );
  
}

export default App
