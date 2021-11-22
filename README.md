# SOS Produtor - Marketplace

Este projeto, tem como desafio a implementação de uma plataforma de marketplace, com foco na venda de alimentos naturais e orgânicos, diretamente do produtor.


## Recursos

### ✅  Desenvolvidos

    - [X]  Implementa tela de login;

    - [X]  Implementa tela de cadastro de produtores;

    - [X]  Implementa tela de visualização de produtores;

    - [X]  Implementa tela de painel de operações de produtores;

    - [X]  Implementa cadastro de produtos;

    - [X]  Implementa cadastro de produtores;

    - [X]  Implementa carrinho de produtos;

    - [X]  Implementa chekout de produtos;

    - [X]  Implementa compra de produtos;

    - [X]  Implementa persistência de dados em localStorage;

    - [X]  Implementa criptografia de senha com JWT;

    - [X]  Implementa gerenciamento global de estado com Redux;

    - [X]  Implementa api de pagamentos com Mercadopago;


## Tecnologias

**Techs Utilizadas:**
- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
- [CSS](https://developer.mozilla.org/en-US/docs/Glossary/css)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript)
- [React.js](https://reactjs.org/docs/getting-started.html)
- [React Router Dom](https://reactrouter.com/web/guides/quick-start)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Mercadopago](https://www.mercadopago.com.br/developers/en/reference)
- [JWT](https://jwt.io/)
- [Redux](https://redux.js.org/)
- [Redux Saga](https://redux-saga.js.org/)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Axios](https://github.com/axios/axios)
- [Lint](https://www.npmjs.com/package/lint)
- [Commitlint](https://www.npmjs.com/package/commitlint)
- [Husky](https://www.npmjs.com/package/husky)


## Requisitos Básicos para Rodar

- Um gerenciador de dependências node (preferencialmente o npm);
- Mongodb (precisa estar instalado e seu serviço ativo no momento da inicialização do projeto);


## Rodando

**Clone:**
- 1. Clone o repositório;
- 1.1. Acesse a pasta raiz do projeto.
- 1.2. Instale as dependências globais do projeto com npm i.

**Server:**
- 2.1. Na pasta raiz do projeto, acesse a pasta api.
- 2.2. Instale as dependências do projeto com npm i.
- 2.3 Inicie a API com o comando npm start.

**Client:**
- 3.1. Na pasta raiz do projeto, acesse a pasta client.
- 3.2. Instale as dependências do projeto com npm i.
- 3.3. Inicie o Client com o comando npm start.

**Migration:**
- 4.1. Acesse a pasta api/src/database/migrations
- 4.2. Rode o comando node migration-add-producers-and-products para popular o banco de dados


## API de Pagamentos

**Avisos Importantes:**
- Utilize a guia anônima do navegador para testar a api de pagamentos e evitar conflitos com a conta pessoal do Mercadopago.

- Apesar de não ser uma prática de mercado, será compartilhada a conta temporária de usuário teste do mercadopago. À qualquer momento, ela pode ser utilizada, para procedimentos relacionados a api: usuario (test_user_26384147@testuser.com) e senha (qatest863);

- Ao efetuar um pagamento, utilize os dados bancários presentes em https://www.mercadopago.com.br/developers/en/guides/online-payments/checkout-pro/test-integration.

- Ao efetuar um pagamento, utilize um cpf aleatório que pode ser gerado em https://www.4devs.com.br/gerador_de_cpf.

- Toda operação de compra no marketplace, pode ser visualizada no link https://webhook.site/#!/3c638d4a-c6e9-4096-bb12-7cf4efa9d47b/3451fef7-8509-4204-b848-f79ce5b84944/1.



## .env
- Apesar de não ser uma prática de mercado, para possibilitar que o projeto rode sem erros e conflitos, será compartilhado o arquivo .env, utilizado no ambiente de desenvolvimento.

**API:**
PORT=3001
MERCADOPAGO_ACCESS_TOKEN=TEST-4723453340686245-111616-bec8e8e757409aa44be07ee404f52af5-190290972
JWT_SECRET=SOSPRODUTOR

**CLIENT:**
REACT_APP_MERCADOPAGO_PUBLIC_KEY=TEST-0cea4c24-eee4-4f4d-a6cd-1bf68d25f9d0
REACT_APP_MERCADOPAGO_APP_ID=4723453340686245
REACT_APP_MERCADOPAGO_RANDOM_ID=SOSPRODUTOR
REACT_APP_MERCADOPAGO_SUCCESS_URI=https://localhost:3000/success
REACT_APP_PUBLIC_URL_SUCCESS=https://localhost:3000/success

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
