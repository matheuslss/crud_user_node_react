import "reflect-metadata";
import express from "express";
import "./database";
import { routes } from "./routes";
import cors from "cors";

const port = 3001;

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(port, () => console.log(`Server running on port ${port}`));
