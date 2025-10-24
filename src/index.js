import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});
