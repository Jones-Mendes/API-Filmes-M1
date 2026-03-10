# API Filmes M1

Projeto didatico para compreender o funcionamento do back-end usando Node.js e Express, com testes via Postman.

## Objetivo

Este projeto existe para fins didaticos. Ele demonstra como:
- criar rotas GET e POST;
- receber dados JSON no corpo da requisicao;
- responder listas e objetos;
- testar endpoints com o Postman.

## Como executar

1. Instale as dependencias:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   npm run dev
   ```

3. Acesse no navegador ou via Postman:
   - http://localhost:3000/
   - http://localhost:3000/filmes
   - http://localhost:3000/series
   - http://localhost:3000/lutas

## Testes no Postman

No Postman, crie requisicoes para as rotas acima.
Para as rotas POST, envie um JSON com os campos:

```json
{
  "titulo": "Exemplo",
  "genero": "Exemplo"
}
```

## Observacoes

Os dados sao armazenados em memoria. Ao reiniciar o servidor, os dados voltam ao estado inicial.
