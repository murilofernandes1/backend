import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  const { userId, cityId } = req.params;

  try {
    await prisma.user.update({
      where: { id: userId },
      data: { cityId: cityId },
    });
    res.status(200).json({ message: "Cidade atualizada com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel atualizar a cidade do usuário" });
    console.log(error);
  }
});
export default router;
