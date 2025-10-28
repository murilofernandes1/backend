import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const userId = req.userId;

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    const fops = await prisma.fop.findMany({
      where: { colaboratorId: userId },
    });
    if (!fops) {
      return res.status(404).json({ message: "Nenhum FOP deste usuário" });
    }
    res.status(200).json(fops);
  } catch (error) {
    res.status(500).json({ message: "Não foi possivel encontrar os fops " });
    console.log(error);
  }
});
export default router;
