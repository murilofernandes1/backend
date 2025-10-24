import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  const city = req.body;

  try {
    await prisma.city.create({
      data: {
        name: city.name,
      },
    });
    res.status(200).json({ message: "Cidade criada com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Não foi possivel criar a cidadde", error });
    console.log(error);
  }
});

export default router;
