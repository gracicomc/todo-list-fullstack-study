import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as userService from "../services/user.service";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export async function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: number;
      username: string;
    };
    const user = await userService.findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: "Usuário não encontrado" });
    }

    // adiciona informações do usuário ao objeto req.user
    req.user = { id: user.id, username: user.username };
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
}
