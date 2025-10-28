import express from "express";
import pkg from "@prisma/client";
import upload from "../../../middleware/upload.js";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", upload.single("image"), async (req, res) => {
  const data = req.body;
  try {
    const newNotice = await prisma.notices.create({
      data: {
        title: data?.title,
        content: data?.content,
        image: req.file?.path,
        departmentId: data?.department,
        cityId: data?.city,
      },
    });

    res
      .status(200)
      .json({ message: "Aviso criado com sucesso", notice: newNotice });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Não foi possível criar o alerta", error });
  }
});

export default router;
