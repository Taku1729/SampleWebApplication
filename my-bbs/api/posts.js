// VercelのAPI Route用
let posts = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(posts);
  } else if (req.method === "POST") {
    const { text } = req.body;
    if (text && text.trim() !== "") {
      posts.push({ name: "名無し", text });
      res.status(200).json({ status: "ok" });
    } else {
      res.status(400).json({ status: "error", message: "本文が空です" });
    }
  } else {
    res.status(405).json({ status: "error", message: "Method not allowed" });
  }
}
