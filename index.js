const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/api", (req, res) => {
  const { module, content } = req.body;
  console.log("-----------------");
  console.log(`module: ${module}`);
  console.log(`content: ${content}`);

  const startTime = Date.now();

  const responseMessage = `testing 測試 testing 測試 testing 測試`;

  const executionTime = `${Date.now() - startTime}ms`;

  const responseJson = {
    module: module,
    time: executionTime,
    response: responseMessage,
  };

  res.json(responseJson);
});

app.listen(port, () => {
  console.log(`Fake API server running at http://localhost:${port}`);
});
