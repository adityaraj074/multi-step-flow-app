const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/progress.json");

const saveProgress = (req, res) => {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2));

    res.json({ success: true });
  } catch (err) {
    console.error("SAVE ERROR:", err);
    res.status(500).json({ error: "Failed to save progress" });
  }
};

const getProgress = (req, res) => {
  try {
    if (!fs.existsSync(filePath)) {
      return res.json({});
    }

    const data = fs.readFileSync(filePath, "utf-8");
    res.json(JSON.parse(data));
  } catch (err) {
    console.error("GET ERROR:", err);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
};

module.exports = { saveProgress, getProgress };
