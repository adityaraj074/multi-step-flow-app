const express = require("express");
const cors = require("cors");
const progressRoutes = require("./routes/progress");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/progress", progressRoutes);

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
