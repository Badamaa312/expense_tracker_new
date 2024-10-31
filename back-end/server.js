import express, { request, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 1234;
const sql = neon(`${process.env.DATABASE_URL}`);

app.get("/", (request, response) => {
  response.send("Hello GET huselt irlee");
});

app.get("/signup", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM User`;

    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.post("/signup", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const existingUser = await sql`SELECT * FROM User WHERE email=${email}`;

    if (existingUser.length > 0) {
      return response.status(400).json({ message: "User already exists" });
    }

    const newUser = await sql`
  INSERT INTO User (name, email, password)
  VALUES( ${name}, ${email}, ${password})
  RETURNING *; `;
    response
      .status(201)
      .json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during create user" });
  }
});

app.post("/login", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await sql`SELECT * FROM User WHERE email =${email}`;

    if (user.length === 0) {
      return response
        .status(400)
        .json({ message: "email or password not match" });
    }

    if (user[0].password !== password) {
      return response.status(400).json({ message: "password not match" });
    }
    response.status(200).json({ message: "Login successful", user: user[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during login user" });
  }
});

app.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
