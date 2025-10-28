import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const accept = req.body;
  const userId = req.userId;
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (user) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
    if (user.role !== "RH") {
      res.status(403).json({ message: "Usuário não autorizado" });
    }
    await prisma.fop.update({
      where: { status },
      data: {
        status: accept.status,
      },
    });
    res
      .status(200)
      .json({ message: "Solicitação de FOP aprovada com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel aprovar a solicitação de FOP" });
    console.log(error);
  }
});
export default router;
