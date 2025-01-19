import prisma from "../models";
import bcrypt from "bcryptjs";

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await prisma.user.create({
    data: {
      username,
      email,
      password: hashedPassword,
    },
  });
}

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({
    where: { email },
  });
}

export async function findUserById(id: number) {
  return await prisma.user.findUnique({
    where: { id },
  });
}
