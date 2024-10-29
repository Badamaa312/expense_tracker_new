import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import { error } from "console";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const port = 1234;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

const sql = neon(`${process.env.DATABASE_URL}`);

app.get("/sign-up", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM expenses`;

    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.post("/sign-up", async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    return response.status(400).json({ error: "All fields are required." });
  }

  try {
    const sqlResponse = await sql`
      INSERT INTO expenses ( name, email, password)
      VALUES ( ${name}, ${email}, ${password})
      RETURNING *;`;

    response.json(sqlResponse);
  } catch (error) {
    console.error("Error login error:", error);
  }
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
