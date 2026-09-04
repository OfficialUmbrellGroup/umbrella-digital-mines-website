import express from "express";

const app = express();
const port = parseInt(process.env.PORT || "23008");

app.use(express.static("dist"));

app.get("{*splat}/", (_, res) => {
  res.sendFile("dist/index.html");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
