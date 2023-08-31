import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 3000;
const app = express();
import userRouter from "./routes/userRoute.js";

app.use("/api/users", userRouter);
app.get("/", (req, res) => {
  res.send("Server already running");
});

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server listening on ${port}`));
