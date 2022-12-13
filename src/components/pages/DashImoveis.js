//ATENÇÃO: Mesmo seguindo o passo a passo, a mensagem não aparece na tela ao incluir um novo imóvel

import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';


function DashImoveis() {

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  return (
    <div>
      <h1>DashBoard imoveis</h1>
      {message && < Message type="success" msg={message} />}
    </div>
  )
}

 

export default DashImoveis;
