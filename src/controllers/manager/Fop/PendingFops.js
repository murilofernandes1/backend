import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.put("/", async (req, res) => {
  try {
    const userId = req.userId;
    const fopId = req.params.id;
    const response = req.body;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    if (user.role !== "Gestor") {
      return res.status(403).json({ message: "Usuário não autorizado" });
    }
    const fopAtual = await prisma.fop.findUnique({
      where: { id: fopId },
    });
    if (!fopAtual) {
      return res
        .status(404)
        .json({ message: "Solicitação de FOP não encontrada" });
    }
    await prisma.fop.update({
      where: {
        id: fopId,
      },
      data: {
        status: response.status,
      },
    });
    res
      .status(200)
      .json({ message: "Solicitação de FOP respondida com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível responder essa solicitação de FOP" });
    console.log(error);
  }
});
export default router;
