import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "src", "public")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src", "index.html"));
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
