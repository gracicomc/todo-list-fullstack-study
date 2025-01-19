"use client";

import { useState } from "react";
import { TodoListTemplate } from "../components/templates/TodoListTemplate";

interface Task {
  id: string;
  description: string;
  completed: boolean;
}

export default function TodoListPage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const user = {
    name: "John Doe",
    imageUrl: "/placeholder.svg?height=40&width=40",
  };

  const addTask = (description: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TodoListTemplate
      user={user}
      tasks={tasks}
      onAddTask={addTask}
      onToggleTask={toggleTask}
      onDeleteTask={deleteTask}
    />
  );
}
