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

    if (!user.departmentId) {
      return res
        .status(400)
        .json({ message: "Usuário não possui cidade associada" });
    }

    const cityAlerts = await prisma.alerts.findMany({
      where: { departmentId: user.departmentId },
      include: { department: { select: { id: true, name: true } } },
    });

    res.status(200).json(cityAlerts);
  } catch (error) {
    console.error("Erro ao carregar os posts:", error);
    res.status(500).json({ message: "Não foi possível carregar os posts" });
  }
});

export default router;
