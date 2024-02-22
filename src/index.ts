import { config } from "dotenv";
import express, { Express, Request, Response } from "express";
import { Todorouter } from "./infrastructure/routes/todo.routes";

config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("heeyy");
});

app.use(Todorouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
} );