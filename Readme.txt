Criando o projeto:
Na pasta iremos dar um npx create-react-app nomeDoProjeto dentro do terminal do VSCode
Depois um: npm install json-server react-icons react-router-dom uui
	- json-server:  (que utilizaremos para fazer o resgate de dados na api fake que servirá como um back end
	- react-icons: é um pacote de ícones do react
	- react-router-dom:
	- uuid: biblioteca que cria id para gente a cada dado inserido.

2º Na pasta src só ficaram os arquivos App.js, index.css e index.js

<Route path='/' element={<Home/>} />
 
Obs.:
Vai ser preciso achar um modo de limitar a quantidade de opções que aparecem no Select.
Pois toda vez que é dado um POST, entra um objeto vazio nas opções

Data: 10/12/2022
Quando retomar:
- Aumentar os tópicos dos formulários de Compradores e Vendedores;
- Resolver o problema sobre o select aumentar uma opcao sempre que adicionado um POST