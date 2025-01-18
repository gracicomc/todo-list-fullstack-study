import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
dotenv.config(); //para conseguir ter acesso as variáveis de ambiente

const app = express();

app.use(express.json());

//swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup());

//rotas iniciais
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//porta
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
