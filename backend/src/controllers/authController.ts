import { Request, Response, RequestHandler } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import jwt from "jsonwebtoken";
import users from "../data/users";

export const signup: RequestHandler = async (req: Request, res: Response): Promise<void> => {

  console.log(req);
  try {
    const { email, password, role, firstname, lastname } = req.body;

    if (users[email]) {
      res.status(400).json({ message: "User already exists" });
      return;
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ id: users.length + 1, firstname, lastname ,email, password: hashedPassword, role: 'user' });
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
  }
  res.status(400).json({ message: "User not registered" });

  
};

export const login: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const user = users.find((u: any) => u.email === email);
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(400).json({ message: "Invalid credentials" });
    return;
  }

  const { password: _, ...userWithoutPassword } = user;

  // Generate JWT
  const token = jwt.sign(
    userWithoutPassword,
    process.env.JWT_SECRET || "your-secret-key",
    { expiresIn: "1h" }
  );

  res.json({ token });
}

export const logout = (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      res.status(500).json({ message: "Error during logout" });
    }
    res.status(200).json({ message: "Logged out successfully" });
  });
};