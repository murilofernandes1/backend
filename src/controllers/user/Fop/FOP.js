import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    const userId = req.userId;
    const fop = req.body;
    if (!userId) {
      return res.status(404).json({ message: "O usuário não existe" });
    }
    const newFop = await prisma.fop.create({
      data: {
        colaboratorId: userId,
        datetime: fop.datetime,
        justify: fop.justify,
        correctHour: fop.correctHour,
      },
    });
    res
      .status(200)
      .json({ message: "Solicitação de FOP enviada com sucesso", newFop });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível enviar a solicitação de FOP" });
    console.log(error);
  }
});
export default router;
