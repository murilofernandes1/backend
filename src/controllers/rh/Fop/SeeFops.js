import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const userId = req.userId;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    if (user.role !== "RH") {
      return res.status(403).json({ message: "Usuário não autorizado" });
    }
    const fops = await prisma.fop.findMany({
      where: { status: "Approved" },
    });
    if (!fops) {
      return res.status(404).json({ message: "Nenhum fop encontrado" });
    }
    res.status(200).json(fops);
  } catch (error) {
    res.status(500).json({ message: "Não foi possivel consultar os FOPS" });
  }
});
export default router;
