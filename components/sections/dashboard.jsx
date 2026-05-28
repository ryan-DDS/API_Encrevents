"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [participantes, setParticipantes] = useState([]);
  const [busca, setBusca] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [editForm, setEditForm] = useState({ nome: "", evento: "", email: "", telefone: "" });
  const [loading, setLoading] = useState(true);
  const [deletandoId, setDeletandoId] = useState(null);
  const [salvandoId, setSalvandoId] = useState(null);

  // LISTAR
  async function listar() {
    setLoading(true);
    try {
      const res = await fetch("/api/usuarios");
      const data = await res.json();
      setParticipantes(Array.isArray(data) ? data : []);
    } catch {
      setParticipantes([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    listar();
    // Protege a rota — redireciona se não tiver token
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  // DELETAR
  async function deletar(id) {
    if (!confirm("Tem certeza que deseja excluir este participante?")) return;
    setDeletandoId(id);
    try {
      await fetch(`/api/usuarios/${id}`, { method: "DELETE" });
      await listar();
    } finally {
      setDeletandoId(null);
    }
  }

  // ABRIR EDIÇÃO
  function abrirEdicao(p) {
    setEditandoId(p.id);
    setEditForm({ nome: p.nome, evento: p.evento, email: p.email, telefone: p.telefone });
  }

  // SALVAR EDIÇÃO
  async function salvar(id) {
    setSalvandoId(id);
    try {
      await fetch(`/api/usuarios/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      setEditandoId(null);
      await listar();
    } finally {
      setSalvandoId(null);
    }
  }

  // LOGOUT
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  // FILTRO
  const filtrados = participantes.filter((p) =>
    [p.nome, p.evento, p.email, p.telefone]
      .join(" ")
      .toLowerCase()
      .includes(busca.toLowerCase())
  );

  return (
    <section
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
    >
      {/* ── HEADER ── */}
      <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between sticky top-0 bg-black/95 backdrop-blur-md z-50">
        <div className="flex items-center gap-x-3">
          <span className="bg-red-700 px-3 py-2 rounded-lg text-white font-bold text-xl leading-none">E</span>
          <span className="text-white font-bold text-lg tracking-widest uppercase">Encrevents</span>
          <span className="ml-3 text-white/30 text-sm tracking-widest uppercase border-l border-white/10 pl-3">
            Dashboard
          </span>
        </div>

        <div className="flex items-center gap-x-4">
          <span className="text-white/40 text-xs tracking-widest uppercase hidden sm:block">
            {participantes.length} participante{participantes.length !== 1 ? "s" : ""}
          </span>
          <button
            onClick={logout}
            className="flex items-center gap-x-2 text-white/50 hover:text-red-500 text-sm transition-all duration-300 border border-white/10 hover:border-red-500/30 px-4 py-2 rounded-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Sair
          </button>
        </div>
      </header>

      {/* ── CONTEÚDO ── */}
      <main className="px-8 py-10 max-w-7xl mx-auto">

        {/* Título + busca */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-x-2 mb-3">
              <div className="w-5 h-[0.5px] bg-red-600"/>
              <span className="text-red-600 text-xs font-medium tracking-widest uppercase">Gestão</span>
            </div>
            <h1 className="text-4xl font-bold uppercase leading-none">
              Participantes
            </h1>
          </div>

          <div className="flex items-center gap-x-3">
            {/* Busca */}
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                type="text"
                placeholder="Buscar participante..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-sm pl-9 pr-4 py-2.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300 w-64"
              />
            </div>

            {/* Botão novo */}
            <a
              href="/cadastro"
              className="bg-red-700 hover:bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 whitespace-nowrap"
            >
              + Novo
            </a>
          </div>
        </div>

        {/* ── TABELA ── */}
        <div className="border border-white/10 rounded-2xl overflow-hidden">
          {/* Cabeçalho */}
          <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_auto] gap-px bg-white/5 px-6 py-3 text-white/40 text-xs font-medium uppercase tracking-widest border-b border-white/10">
            <span>Nome</span>
            <span>Evento</span>
            <span>Email</span>
            <span>Telefone</span>
            <span className="text-right pr-1">Ações</span>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex items-center justify-center py-20 gap-x-3 text-white/30 text-sm">
              <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
              </svg>
              Carregando...
            </div>
          )}

          {/* Vazio */}
          {!loading && filtrados.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 gap-y-3 text-white/20">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><line x1="8" y1="15" x2="16" y2="15"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
              <span className="text-sm tracking-widest uppercase">
                {busca ? "Nenhum resultado encontrado" : "Nenhum participante cadastrado"}
              </span>
            </div>
          )}

          {/* Linhas */}
          {!loading && filtrados.map((p, i) => (
            <div
              key={p.id}
              className={`border-b border-white/5 last:border-0 transition-all duration-200 ${editandoId === p.id ? "bg-white/5" : "hover:bg-white/[0.03]"}`}
            >
              {editandoId === p.id ? (
                /* ── MODO EDIÇÃO ── */
                <div className="px-6 py-4 flex flex-col gap-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: "nome", label: "Nome", type: "text" },
                      { key: "evento", label: "Evento", type: "text" },
                      { key: "email", label: "Email", type: "email" },
                      { key: "telefone", label: "Telefone", type: "text" },
                    ].map(({ key, label, type }) => (
                      <div key={key} className="flex flex-col gap-y-1">
                        <label className="text-white/40 text-xs uppercase tracking-widest">{label}</label>
                        <input
                          type={type}
                          value={editForm[key]}
                          onChange={(e) => setEditForm({ ...editForm, [key]: e.target.value })}
                          className="bg-black border border-white/20 focus:border-red-600 rounded-sm px-3 py-2 text-white text-sm placeholder:text-white/20 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-x-2 justify-end">
                    <button
                      onClick={() => setEditandoId(null)}
                      className="text-white/40 hover:text-white text-xs uppercase tracking-widest px-4 py-2 border border-white/10 rounded-sm transition-all duration-300"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={() => salvar(p.id)}
                      disabled={salvandoId === p.id}
                      className="bg-red-700 hover:bg-red-600 disabled:opacity-50 text-white text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-sm transition-all duration-300 flex items-center gap-x-2"
                    >
                      {salvandoId === p.id ? (
                        <svg className="animate-spin" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                      ) : null}
                      Salvar
                    </button>
                  </div>
                </div>
              ) : (
                /* ── MODO VISUALIZAÇÃO ── */
                <div className="grid grid-cols-[1fr_1fr_1.5fr_1fr_auto] gap-px items-center px-6 py-4 text-sm">
                  <span className="text-white font-medium truncate pr-4">{p.nome}</span>
                  <span className="text-white/60 truncate pr-4">{p.evento}</span>
                  <span className="text-white/50 truncate pr-4 text-xs">{p.email}</span>
                  <span className="text-white/50 truncate pr-4 text-xs">{p.telefone}</span>
                  <div className="flex gap-x-2 justify-end">
                    <button
                      onClick={() => abrirEdicao(p)}
                      title="Editar"
                      className="p-2 text-white/30 hover:text-yellow-400 hover:bg-yellow-400/10 rounded-sm transition-all duration-200"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                    <button
                      onClick={() => deletar(p.id)}
                      disabled={deletandoId === p.id}
                      title="Excluir"
                      className="p-2 text-white/30 hover:text-red-500 hover:bg-red-500/10 disabled:opacity-50 rounded-sm transition-all duration-200"
                    >
                      {deletandoId === p.id ? (
                        <svg className="animate-spin" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="3 6 5 6 21 6"/>
                          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
                          <path d="M10 11v6"/><path d="M14 11v6"/>
                          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rodapé da tabela */}
        {!loading && filtrados.length > 0 && (
          <div className="mt-4 flex justify-between items-center text-white/20 text-xs tracking-widest uppercase">
            <span>{filtrados.length} de {participantes.length} participante{participantes.length !== 1 ? "s" : ""}</span>
            <span>Encrevents © 2025</span>
          </div>
        )}
      </main>
    </section>
  );
}