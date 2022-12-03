import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Aqui os imports das páginas
import Clientes from './components/pages/Compradores';
import Home from './components/pages/Home';
import Imoveis from './components/pages/Imoveis';
import Vendedores from './components/pages/Vendedores';

//Aqui o import do layout
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          {' '}
          {/*Após iniciar o Routes, precisamos envolver tudo em uma sintaxe especial que tenha props. Se não o Routes nao sabe onde colocar as informações que ele contém dentro*/}
          <Route exact path="/" element={<Home />} /> {/* Essa é a rota linkando pela '/' */}
          <Route path="/imoveis" element={<Imoveis />} />{' '}
          {/*Ele puxa o js aqui na Route, mas só aparece quando é linkado acima */}
          <Route path="/compradores" element={<Clientes />} />
          <Route path="/vendedores" element={<Vendedores />} />
        </Routes>
      </Container>
      {/*No vídeo o Container fica por dentro de Routes, mas nao estava indo, só entrou quando coloquei fora, sendo envolvido por Router.*/}
      <Footer />
    </Router>
  );
}

export default App;
