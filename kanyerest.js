import mongoose from "mongoose";
import express from "express";
import router from "./routes/kanyeRoutes.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/", router);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Conectado ao MongoDB 🚀");
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch((err) => console.error("Erro ao conectar ao MongoDB:", err));
