import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import taskRoutes from "./routes/task.routes";
// import authRoutes from "./routes/auth.routes";
import { authenticateToken } from "./middlewares/auth.middleware";
import router from "./routes/task.routes";
import swaggerDocument from "./swagger.json";

dotenv.config(); //para conseguir ter acesso as variáveis de ambiente
const app = express();
app.use(express.json());

//swagger setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//rotas iniciais
app.use("/tasks", taskRoutes);
// app.use("/auth", authRoutes);
// router.get("/protected", authenticateToken, (req, res) => {
//   res.json({ message: `Bem-vindo, ${req.user?.username}!` });
// });

//porta
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
