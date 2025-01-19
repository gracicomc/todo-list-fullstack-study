import { Request, Response } from "express";
import * as userService from "../services/user.service";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export async function register(req: Request, res: Response) {
  const { username, email, password } = req.body;

  try {
    const user = await userService.createUser(username, email, password);
    res
      .status(201)
      .json({
        message: "Usuário criado com sucesso",
        user: { id: user.id, username: user.username, email: user.email },
      });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar o usuário" });
  }
}

export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await userService.findUserByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Credenciais inválidas" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login" });
  }
}
