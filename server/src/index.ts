"use strict";
import express from "express";
import cors from "cors";
const app = express();
const port = 8000;

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use(express.json());
app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
