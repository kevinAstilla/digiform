import express, {Request, Response} from "express";
import { ensureAuthenticated } from "@/middleware/auth";
import { stat } from "fs";

const router = express.Router();

router.get("/protected", ensureAuthenticated, (req: Request, res:Response) => {
  res.json({ message: `Welcome, ${req.user}!` });
});

router.post("/form/submit", async (req: Request, res:Response) => {
  const { body } = req;

  console.log(req.body);

  res.json({ message: `Form submitted`, status: 200 });
});

export default router;