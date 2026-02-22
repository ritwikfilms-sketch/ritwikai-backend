import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("RitwikAI Backend Running 🚀");
});

app.post("/chat", (req, res) => {
  const message = req.body.message;

  let reply = "Hello 👋 I am RitwikAI";

  if (message?.toLowerCase().includes("hello")) {
    reply = "Hi Ritwik 👑";
  } else if (message?.toLowerCase().includes("how are you")) {
    reply = "I am powerful and ready 🚀";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
