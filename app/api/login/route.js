import pool from "@/lib/db";
import bcrypt from "bcrypt";
import { gerarToken } from "@/lib/auth";

export async function POST(req) {
    const { email, senha } = await req.json();

    const result = await pool.query(
        "SELECT * FROM participantes WHERE email=$1", [email]
    );
    const user = result.rows[0];

    if (!user) return Response.json({ error: "Usuário não encontrado" }, { status: 404 });

    const ok = await bcrypt.compare(senha, user.senha);
    if (!ok) return Response.json({ error: "Senha inválida" }, { status: 401 });

    const token = gerarToken({ id: user.id, nome: user.nome });
    return Response.json({ token });
}