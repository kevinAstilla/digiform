import { type Express, Request, Response } from 'express';
import cors from "cors";
import passport from "@/config/passportConfig";
import session from "express-session";
import auth from "@/routes/auth";
import templates from '@/routes/templates';
import forms from '@/routes/forms';
import protectedRoutes from "@/routes/protectedRoutes";
import bodyParser from "body-parser";
import express from "express";

export default function expressLoader({ app }: { app: Express}): void {
    app.use(cors({
        origin: "http://localhost:5173",
        credentials: true,
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(passport.initialize());
    // app.use((req, res, next) => {
    //     console.log('Headers:', req.headers);
    //     console.log('Body:', req.body); // Will show undefined if not parsed
    //     next();
    //   });
    
    app.get('/', (req: Request, res: Response) => {
        res.send('well that was fast')
    })
    
    app.use('/auth', auth);
    app.use('/api/forms', forms);
    app.use('/api/templates', templates);
    // app.use('/api', protectedRoutes);
}