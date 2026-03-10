# API Filmes M1
<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExd283cmRjcGczcmp0bzljZG9xbDl2MXV2amF6bmI3eWF4Ymw3NDV0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xrvCI5ykhg9QQ/giphy.gif" width="300">

  <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWw1Nm1keDRob2pkM3VodzM1Zm5hM3lwOXU5dGk0aWFkZHF2dmM0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OLVwERFnMoPavU34i1/giphy.gif" width="300">

  <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWw5MDMyYTFvb3lsMHNlM3JteGtsNHFqMHNidDZweThmbmJtdWI1byZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QAxdBle71EVKPqJitF/giphy.gif" width="300">
</p>

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

<img width="1804" height="597" alt="image" src="https://github.com/user-attachments/assets/3d03c981-785e-4526-a4ef-454876c49607" />


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
