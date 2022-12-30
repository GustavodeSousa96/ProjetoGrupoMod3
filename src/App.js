import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Aqui os imports das páginas
import Clientes from './components/pages/Compradores';
import Home from './components/pages/Home';
import Imoveis from './components/pages/Imoveis';
import Vendedores from './components/pages/Vendedores';

import DashImoveis from './components/pages/DashImoveis';
import DashCompradores from './components/pages/DashCompradores';
import DashVendedores from './components/pages/DashVendedores';

//Aqui o import do layout
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Imovel from './components/pages/Imovel';
import PutCompradores from './components/pages/PutCompradores';
import PutVendedores from './components/pages/PutVendedores';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          {' '}
          {/*Após iniciar o Routes, precisamos envolver tudo em uma sintaxe especial que tenha props. Se não o Routes nao sabe onde colocar as informações que ele contém dentro*/}
          <Route path="/" element={<Home />} /> {/* Essa é a rota linkando pela '/' */}
          <Route path="/imoveis" element={<Imoveis />} />{' '}
          {/*Ele puxa o js aqui na Route, mas só aparece quando é linkado acima */}
          <Route path="/compradores" element={<Clientes />} />
          <Route path="/vendedores" element={<Vendedores />} />
          <Route path="/dashimoveis" element={<DashImoveis />} />
          <Route path="/dashcompradores" element={<DashCompradores />} />
          <Route path="/dashvendedores" element={<DashVendedores />} />
          <Route path="/imovel/:id" element={<Imovel/>} />{/*pag do metodo put*/}
          <Route path="/putcompradores/:id" element={<PutCompradores/>} /> {/*pag do metodo put*/}
          <Route path="/putvendedores/:id" element={<PutVendedores/>} /> {/*pag do metodo put*/}
        </Routes>
      </Container>
      {/*No vídeo o Container fica por dentro de Routes, mas nao estava indo, só entrou quando coloquei fora, sendo envolvido por Router.*/}
      <Footer />
    </Router>
  );
}

export default App;
