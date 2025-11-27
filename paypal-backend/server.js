import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();


console.log("Server is running on port 3000");


app.listen(PORT, () => {
  console.log(`✅ PayPal backend running on http://localhost:${PORT}`);
});