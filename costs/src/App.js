import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Contato from './components/pages/Contato';
import NovoProjeto from './components/pages/NovoProjeto';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Projetos from './components/pages/Projetos';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home></Home>}></Route>
            <Route path='/empresa' element={<Empresa></Empresa>}></Route>
            <Route path='/contato' element={<Contato></Contato>}></Route>
            <Route path='/novoprojeto' element={<NovoProjeto></NovoProjeto>}></Route>
            <Route path='/projetos' element={<Projetos></Projetos>}></Route>
          </Routes>

        </Container>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
