// filepath: /c:/Users/graciela.parente/dev/estudos/todo-list-fullstack-study/frontend/src/services/tasks/tasks.service.ts
import { Tasks } from "@/types/tasks/tasks.types";
import api from "../api";

// Função para buscar todas as tarefas
export const fetchTasks = async (): Promise<Tasks[]> => {
  const { data } = await api.get("/tasks");
  return data;
};

// Função para adicionar uma nova tarefa
export const addTask = async (title: string): Promise<Tasks> => {
  const { data } = await api.post("/tasks", { title });
  return data;
};

// Função para atualizar uma tarefa
export const updateTask = async (id: number, completed: boolean) => {
  const { data } = await api.put(`/tasks/${id}`, { completed });
  return data;
};

// Função para remover uma tarefa
export const deleteTask = async (id: number) => {
  const { data } = await api.delete(`/tasks/${id}`);
  return data;
};
