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

// app.post("/sign-in", (request, response) => {
//   const { name, password } = request.body;

//   fs.readFile("./data/user.json", "utf-8", (readError, data) => {
//     if (readError) {
//       response.json({
//         success: false,
//         error: error,
//       });
//     }

//     let savedData = data ? JSON.parse(data) : [];

//     const registeredUser = savedData.filter(
//       (user) => user.name === name && user.password === password
//     );
//     if (registeredUser.length > 0) {
//       response.json({
//         success: true,
//         user: registeredUser[0],
//       });
//     } else {
//       response.json({
//         success: false,
//       });
//     }
//   });
// });

// app.post("/sign-up", (request, response) => {
//   const { name, email, password } = request.body;

//   fs.readFile("./data/user.json", "utf-8", (readError, data) => {
//     let savedData = data ? JSON.parse(data) : [];

//     if (readError) {
//       response.json({
//         success: false,
//         error: error,
//       });
//     }

//     console.log(data);

//     const newUser = {
//       id: Date.now().toString(),
//       name: name,
//       email: email,
//       password: password,
//     };
//     savedData.push(newUser);

//     fs.writeFile("./data/user.json", JSON.stringify(savedData), (error) => {
//       if (error) {
//         response.json({
//           success: false,
//           error: error,
//         });
//       } else {
//         response.json({
//           success: true,
//           user: newUser,
//         });
//       }
//     });
//   });
// });

const sql = neon(`${process.env.DATABASE_URL}`);

app.get("/sign-up", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM expense`;

    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.post("/sign-up", async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !price || !password) {
    return response.status(400).json({ error: "All fields are required." });
  }

  try {
    const sqlResponse = await sql`
      INSERT INTO expense ( name, description, password)
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
