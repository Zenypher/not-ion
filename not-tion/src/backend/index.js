import express from "express";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate())
const app = new express();

app.use(express.json());

app.get("/notes", async(req, res) => {
    const notes = await prisma.notes.findMany();
    res.json(notes);
})

app.post('/notes', async(req, res) => {
    const {title, note} = req.body;
    const snote = await prisma.notes.create({data: {title, note}});
    res.json(snote);
})

app.listen(4000, () => console.log('API server running on http://localhost:4000'))