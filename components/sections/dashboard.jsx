"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const [participantes, setParticipantes] = useState([]);
    const [busca, setBusca] = useState("");
    const [editando, setEditando] = useState(null); // participante sendo editado
    const [form, setForm] = useState({ nome: "", evento: "", email: "", telefone: "" });
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }
        fetch("/api/usuarios")
            .then(res => res.json())
            .then(data => setParticipantes(data));
    }, []);

    async function deletar(id) {
        if (!confirm("Tem certeza que deseja deletar?")) return;
        await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
        setParticipantes(participantes.filter(p => p.id !== id));
    }

    function abrirEditar(p) {
        setEditando(p.id);
        setForm({ nome: p.nome, evento: p.evento, email: p.email, telefone: p.telefone });
    }

    async function salvarEdicao() {
        await fetch(`/api/usuarios/${editando}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        setParticipantes(participantes.map(p => p.id === editando ? { ...p, ...form } : p));
        setEditando(null);
    }

    function sair() {
        localStorage.removeItem("token");
        router.push("/login");
    }

    const filtrados = participantes.filter(p =>
        p.nome.toLowerCase().includes(busca.toLowerCase()) ||
        p.evento.toLowerCase().includes(busca.toLowerCase()) ||
        p.email.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <section className="bg-black h-screen">

            {/* Modal de edição */}
            {editando && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
                    <div className="bg-zinc-900 border border-white/10 rounded-2xl px-10 py-10 w-full max-w-md">
                        <h2 className="text-white text-2xl font-bold uppercase mb-6">Editar Participante</h2>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex flex-col gap-y-1">
                                <p className="text-white/50 text-xs tracking-widest uppercase">Nome</p>
                                <input value={form.nome} onChange={e => setForm({ ...form, nome: e.target.value })} className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-all duration-300"/>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="text-white/50 text-xs tracking-widest uppercase">Evento</p>
                                <input value={form.evento} onChange={e => setForm({ ...form, evento: e.target.value })} className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-all duration-300"/>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="text-white/50 text-xs tracking-widest uppercase">Email</p>
                                <input value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-all duration-300"/>
                            </div>
                            <div className="flex flex-col gap-y-1">
                                <p className="text-white/50 text-xs tracking-widest uppercase">Telefone</p>
                                <input value={form.telefone} onChange={e => setForm({ ...form, telefone: e.target.value })} className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-red-600 transition-all duration-300"/>
                            </div>
                        </div>
                        <div className="flex gap-x-3 mt-6">
                            <button onClick={salvarEdicao} className="bg-red-700 text-white text-sm font-bold uppercase tracking-widest px-6 py-3 rounded-sm hover:bg-red-600 transition-all duration-300 cursor-pointer">Salvar</button>
                            <button onClick={() => setEditando(null)} className="bg-white/5 border border-white/10 text-white text-sm px-6 py-3 rounded-sm hover:bg-white/10 transition-all duration-300 cursor-pointer">Cancelar</button>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative h-16 flex items-center justify-center bg-black bg-cover bg-center">
                <div className="fixed top-0 left-0 w-full z-50 h-16 grid grid-cols-2 items-center bg-black/30 border-b border-white/15">
                    <div className="flex gap-x-1.5 items-center justify-start px-4">
                        <h1 className="bg-red-700 px-3 py-1 m-2 rounded-lg text-white font-bold text-2xl">E</h1>
                        <h2 className="text-white font-bold text-xl tracking-widest">ENCREVENTS</h2>
                    </div>
                    <div className="flex gap-x-4 justify-end items-center px-4">
                        <Link href="/" className="bg-black text-white hover:text-white/70 transition-all duration-300 text-sm">Voltar</Link>
                        <button onClick={sair} className="bg-black border cursor-pointer border-red-600 px-7 py-2 rounded-sm text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 text-sm">Sair</button>
                    </div>
                </div>
            </div>

            <div className="mb-10 px-18 py-20">
                <div className="flex gap-x-2 items-center mb-4">
                    <div className="w-5 h-[0.5px] bg-red-600 rounded-full"/>
                    <span className="text-red-600 text-sm font-medium uppercase tracking-widest">Gestão</span>
                </div>
                <div className="flex justify-between items-end">
                    <h1 className="text-6xl font-bold uppercase text-white">Participantes</h1>
                    <button className="p-2 px-5 border border-white/30 hover:border-white rounded-sm text-white/30 hover:text-white transition-all duration-300">🔍︎ Procurar Participante...</button>
                </div>
            </div>

            <div className="px-18 pb-20">
                <table className="w-full text-white text-sm border border-white/10 rounded-sm overflow-hidden">
                    <thead>
                        <tr className="text-white/40 text-xs tracking-widest uppercase border-b border-white/10 bg-white/5">
                            <th className="text-left px-6 py-4">Nome</th>
                            <th className="text-left px-6 py-4">Evento</th>
                            <th className="text-left px-6 py-4">Email</th>
                            <th className="text-left px-6 py-4">Telefone</th>
                            <th className="text-left px-6 py-4">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtrados.map((p) => (
                            <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-all duration-200">
                                <td className="px-6 py-4 font-medium">{p.nome}</td>
                                <td className="px-6 py-4 text-white/60">{p.evento}</td>
                                <td className="px-6 py-4 text-white/60">{p.email}</td>
                                <td className="px-6 py-4 text-white/60">{p.telefone}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-x-3">
                                        {/* Editar */}
                                        <button onClick={() => abrirEditar(p)} className="text-black px-1.5 py-0 cursor-pointer rounded-md bg-white hover:bg-amber-300 transition-all duration-300 text-lg">✎</button>
                                        {/* Deletar */}
                                        <button onClick={() => deletar(p.id)}>
                                            <Image className="bg-white hover:bg-red-600 transition-all duration-300 cursor-pointer rounded-md p-0.5" src="/images/delete.png" width={30} height={30} alt="trash"/>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </section>
    )
}