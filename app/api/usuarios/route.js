import pool from "@/lib/db";
import bcrypt from "bcrypt";

// POST — cadastrar participante
export async function POST(req) {
    const { nome, evento, email, telefone, senha } = await req.json();
    const hash = await bcrypt.hash(senha, 10);
    const result = await pool.query(
        "INSERT INTO participantes (nome, evento, email, telefone, senha) VALUES ($1,$2,$3,$4,$5) RETURNING *",
        [nome, evento, email, telefone, hash]
    );
    return Response.json(result.rows[0]);
}

// GET — listar participantes
export async function GET() {
    const result = await pool.query("SELECT id, nome, evento, email, telefone FROM participantes");
    return Response.json(result.rows);
}