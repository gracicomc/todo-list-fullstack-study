import prisma from "../models";
import { Task } from "@prisma/client";

export async function creatTask(title: string, userId: number): Promise<Task> {
  return await prisma.task.create({
    data: {
      title,
      userId,
    },
  });
}

export async function getTasksByUser(userId: number): Promise<Task[]> {
  return await prisma.task.findMany({
    where: { userId },
  });
}

export async function updateTask(
  id: number,
  completed: boolean
): Promise<Task | null> {
  return await prisma.task.update({
    where: { id },
    data: { completed },
  });
}

export async function deleteTask(id: number): Promise<void> {
  await prisma.task.delete({
    where: { id },
  });
}
