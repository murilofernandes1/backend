import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      include: { city: true },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    const notices = await prisma.notices.findMany({
      where: {
        city: user.city,
      },
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: "Não foi possivel carregar os alertas" });
    console.log(error);
  }
});
export default router;
