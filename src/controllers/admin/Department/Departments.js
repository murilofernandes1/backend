import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  const department = req.body;
  try {
    await prisma.departments.create({
      data: {
        name: department.name,
        city: department.city,
      },
    });
    res.status(200).json({ message: "Departamento criado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível criar o departamento", error });
    console.log(error);
  }
});

router.delete("/", async (req, res) => {
  const departmentId = req.params.id;

  try {
    await prisma.departments.delete({
      where: { id: departmentId },
    });
    res.status(200).json({ message: "Departamento excluido com sucesso!" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel excluir o departamento" });
  }
});
export default router;
