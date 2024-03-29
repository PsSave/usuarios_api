import express from 'express';
import db from './config/dbConnect.js';

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API em execução!');
});

export default app;