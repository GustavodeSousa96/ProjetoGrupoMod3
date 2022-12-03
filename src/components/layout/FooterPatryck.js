import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flexContainer">
          <div className="coluna site">
            <h2>Home</h2>
            <dl>
              <dd>
                <a href="link para a página Home">Home</a>
              </dd>
              <dd>
                <a href="link para a página Quem Somos">Quem Somos</a>
              </dd>
              <dd>
                <a href="link para a página Contato">Contato</a>
              </dd>
            </dl>
          </div>
          <div className="coluna imobiliaria">
            <h2>Imoveis</h2>
            <dl>
              <dd>
                <a href="link para a página Alugue seu imovel">Alugue seu imovel</a>
              </dd>
              <dd>
                <a href="link para a página imoveis para alugar">Imoveis para alugar</a>
              </dd>
              <dd>
                <a href="link para a página imoveis a venda">imoveis a venda</a>
              </dd>
            </dl>
          </div>
          <div className="coluna logo">
            <div className="imagemFooter">
              <img src=""></img>
            </div>
            <p>Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
