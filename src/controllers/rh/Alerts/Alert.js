import express from "express";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
const prisma = new PrismaClient();
const router = express.Router({ mergeParams: true });

router.post("/", async (req, res) => {
  try {
    const userId = req.userId;
    const newAlert = req.body;
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    await prisma.alerts.create({
      data: {
        title: newAlert.title,
        senderId: userId,
        departmentId: newAlert.department,
        content: newAlert.content,
        dateTime: newAlert?.dateTime,
      },
    });
    res.status(200).json({ message: "Alerta criado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Não foi possível criar o alerta" });
    console.log(error);
  }
});
export default router;
