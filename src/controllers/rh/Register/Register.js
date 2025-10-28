import express from "express";
import bcrypt from "bcrypt";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const router = express.Router();

router.post("/", async (req, res) => {
  const user = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword,
        role: user.role,
        department: { connect: { id: user.departmentId } },
        city: { connect: { id: user.cityId } },
      },
    });
    res.status(201).json({ message: "Usuário criado com sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Não foi possível criar o usuário" });
  }
});
export default router;
