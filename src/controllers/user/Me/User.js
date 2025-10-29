import express from "express";
import pkg from "@prisma/client";
import upload from "../../../middleware/upload.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    return res.status(404).json({ message: "Usuário não encontrado." });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        fops: { select: { createdAt: true, updateAt: true, status: true } },
        department: {
          select: { id: true, name: true },
        },
        city: { select: { id: true, name: true } },
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possível encontrar o usuário", error });
    console.log(error);
  }
});

router.put("/", upload.single("image"), async (req, res) => {
  try {
    const userId = req.userId;
    if (!userId) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }

    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        image: req.file.path,
      },
    });
    res.status(200).json({ message: "Foto de perfil atualizada com sucesso" });
  } catch {
    res
      .status(500)
      .json({ message: "Não foi possivel atualizar a foto de perfil" });
  }
});
export default router;
