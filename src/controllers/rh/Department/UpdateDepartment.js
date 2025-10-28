import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.put("/", async (req, res) => {
  const { userId, departmentId } = req.params;
  if (!userId) {
    res.status(404).json({ message: "Usuário não encontrado" });
  }
  if (!departmentId) {
    res.status(404).json({ message: "Departamento não encontrado" });
  }
  try {
    await prisma.user.update({
      where: { id: userId },
      data: {
        departmentId: departmentId,
      },
    });
    res
      .status(200)
      .json({ message: "Setor do colaborador atualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel atualizar o setor do usuário" });
    console.log(error);
  }
});
export default router;
