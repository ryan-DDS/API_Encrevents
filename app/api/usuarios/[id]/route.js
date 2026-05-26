import pool from "@/lib/db";

// PUT — editar participante
export async function PUT(req, context) {
    const { id } = await context.params;
    const { nome, evento, email, telefone } = await req.json();
    await pool.query(
        "UPDATE participantes SET nome=$1, evento=$2, email=$3, telefone=$4 WHERE id=$5",
        [nome, evento, email, telefone, Number(id)]
    );
    return Response.json({ ok: true });
}

// DELETE — deletar participante
export async function DELETE(req, context) {
    const { id } = await context.params;
    await pool.query("DELETE FROM participantes WHERE id=$1", [Number(id)]);
    return Response.json({ ok: true });
}