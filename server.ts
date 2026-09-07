import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = parseInt(process.env.PORT || "23008");
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), "dist");

app.use(express.static(dist));

app.get("/{*splat}", (_req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
