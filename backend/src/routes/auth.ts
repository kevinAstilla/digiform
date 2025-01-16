import express from "express";
import passport from "@/config/passportConfig";
import { logout, signup, login } from "@/controllers/authController";

const router = express.Router();

router.post("/signup", signup);

router.post("/login",login);

router.get("/logout", logout);

export default router;