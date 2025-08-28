# KanyeRest API

API em Node.js + Express + Mongoose que consome `https://api.kanye.rest/` para salvar e listar quotes do Kanye West.

## Requisitos
- Node.js 18+
- MongoDB (local ou Atlas)

## Configuração
1. Instale as dependências na raiz do repositório (há um único `package.json`):
   ```bash
   npm install
   ```
2. Defina a variável de ambiente do MongoDB:
   - Windows PowerShell:
     ```bash
     $env:MONGO_URI="mongodb://127.0.0.1:27017/kanye"
     ```
   - Linux/macOS (bash/zsh):
     ```bash
     export MONGO_URI="mongodb://127.0.0.1:27017/kanye"
     ```

## Executando
Na pasta `kanyeRest/`:
```bash
node ./kanyerest.js
```
A API sobe em `http://localhost:3000`.

## Endpoints
- POST `/` — cria uma nova quote buscando na API externa e salva no MongoDB.
  - Exemplo:
    ```bash
    curl -X POST http://localhost:3000/
    ```
  - Resposta 201 (exemplo):
    ```json
    { "_id": "...", "quote": "Kanye said: ..." }
    ```

- GET `/` — lista todas as quotes salvas.
  - Exemplo:
    ```bash
    curl http://localhost:3000/
    ```

- DELETE `/:id` — remove uma quote pelo `_id` do MongoDB.
  - Exemplo:
    ```bash
    curl -X DELETE http://localhost:3000/66f0c0c2a3b4e6...
    ```

## Estrutura
- `kanyerest.js`: bootstrap do servidor e conexão MongoDB.
- `routes/kanyeRoutes.js`: rotas Express.
- `controllers/kanyeController.js`: regras de negócio.
- `services/kanyeService.js`: integração com API Kanye.
- `models/quotesModel.js`: schema Mongoose.

## Notas
- Garanta que `MONGO_URI` esteja definida antes de iniciar.
- Se quiser usar `npm start`, ajuste o `package.json` para apontar para `kanyeRest/kanyerest.js`.
