### API Node com TypeScript

Aplicação desenvolvida com Node.js junto ao [TypeScript](https://www.typescriptlang.org/), utilizando o conceito de models, repositories e services (Repository Pattern).
- Essa será uma aplicação para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações.

## Tecnologias
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Jest](https://jestjs.io/)


### Rotas da aplicação

- **`POST /transactions`**: A rota recebe `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas).
- **`GET /transactions`**: Retorna uma listagem com todas as transações que você cadastrou, junto com o valor de soma de entradas, retiradas e total de crédito.

## Instalações e usos

Clone ou faça o download desse repositório:

```
# Clone o repositório
$ git clone https://github.com/rodolforoc/node-ts
```

Dentro da pasta /node-ts rode os seguintes comandos:

```
# Instale as dependencias
$ yarn

# Rode a API
$ yarn dev:server

# running on port 3333
```

