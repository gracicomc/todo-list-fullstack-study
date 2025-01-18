import { Request, Response } from "express";
import * as taskService from "../services/task.service";

export async function createTask(req: Request, res: Response) {
  const { title, userId } = req.body;

  try {
    const task = await taskService.creatTask(title, userId);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar a tarefa" });
  }
}

export async function getTasks(req: Request, res: Response) {
  const userId = req.body;

  try {
    const tasks = await taskService.getTasksByUser(userId);
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
}

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  const { completed } = req.body;

  try {
    const task = await taskService.updateTask(Number(id), completed);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar a tarefa" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await taskService.deleteTask(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar a tarefa" });
  }
}
