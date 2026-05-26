"use client";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
    const [form, setForm] = useState({ email: "", senha: "" });

    async function handleSubmit(e) {
        e.preventDefault();
        const res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        const data = await res.json();
        if (!res.ok) return alert(data.error);
        localStorage.setItem("token", data.token);
        window.location.href = "/";
    }

    return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/login.png')" }}>

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>

            {/* Card do formulário */}
            <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-2xl px-10 py-12">

                {/* logo */}
                <div className="flex items-center gap-x-2 mb-8">
                    <Link href="/" className="bg-red-700 px-3 py-1 rounded-lg text-white font-bold text-2xl">E</Link>
                    <Link href="/" className="text-white font-bold text-xl tracking-widest">ENCREVENTS</Link>
                </div>

                {/* bem-vindo */}
                <h1 className="text-white text-3xl font-bold mb-1">Bem-vindo de volta</h1>
                <p className="text-white/50 text-sm mb-8">Entre na sua conta para continuar</p>

                {/* formulário */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">

                    {/* email */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Email</p>
                        <input onChange={e => setForm({ ...form, email: e.target.value })} type="email" placeholder="@email.com" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>

                    {/* senha */}
                    <div className="flex flex-col gap-y-1">
                        <div className="flex justify-between items-center">
                            <p className="text-white/70 text-xs tracking-widest uppercase">Senha</p>
                            <Link href="#" className="text-red-600 text-xs hover:text-red-500 transition-all duration-300">Esqueceu a senha?</Link>
                        </div>
                        <input onChange={e => setForm({ ...form, senha: e.target.value })} type="password" placeholder="senha" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>

                    {/* botao */}
                    <button type="submit" className="bg-red-700 text-white text-sm font-bold uppercase tracking-widest py-3 rounded-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 mt-2">
                        Entrar
                    </button>

                </form>

                {/* linha */}
                <div className="flex items-center gap-x-4 my-6">
                    <div className="flex-1 h-[0.5px] bg-white/10"/>
                    <span className="text-white/30 text-xs">ou</span>
                    <div className="flex-1 h-[0.5px] bg-white/10"/>
                </div>

                {/* cadastre-se */}
                <p className="text-center text-white/50 text-sm">
                    Não tem uma conta?{" "}
                    <Link href="/cadastro" className="text-red-600 hover:text-red-500 transition-all duration-300">Cadastre-se grátis</Link>
                </p>
            </div>
        </section>
    )
}