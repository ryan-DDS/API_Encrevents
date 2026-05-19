export default function Footer() {
    return (
        <section id="footer" className="bg-black/95">

            <div className="max-w-10/12 mx-auto">
                <div className="grid grid-cols-4 gap-[4px] overflow-hidden">

                    {/* coluna 1 - Encrevents */}
                    <div className="px-20 py-18">
                        <div className="flex gap-x-1.5 items-center">
                            <h1 className="bg-red-700 px-3 py-1 m-2 rounded-lg text-white font-bold text-2xl">E</h1>
                            <h2 className="text-white font-bold text-2xl tracking-widest">ENCREVENTS</h2>
                        </div>
                        <div className="px-2">
                            <p className="text-white/70 text-sm mb-4 leading-relaxed">A plataforma que transforma momentos em memórias. <br /> Eventos incríveis, experiências que ficam.</p>
                        </div>
                    </div>

                    {/* coluna 2 */}
                    <div className="px-20 py-18 pt-22">
                        <p className="text-white/70 text-sm mb-4 uppercase tracking-widest">plataforma</p>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Explorar Eventos</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Criar Evento</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">App Mobile</a>
                    </div>

                    {/* coluna 3 */}
                    <div className="px-20 py-18 pt-22">
                        <p className="text-white/70 text-sm mb-4 uppercase tracking-widest">empresa</p>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Sobre Nós</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Blog</a>
                    </div>

                    {/* coluna 4 */}
                    <div className="px-20 py-18 pt-22">
                        <p className="text-white/70 text-sm mb-4 uppercase tracking-widest">suporte</p>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Central de Ajuda</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Contato</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Termos de Uso</a>
                        <a href="#" className="block text-white/70 text-sm mb-2 hover:text-white transition-all duration-300">Privacidade</a>
                    </div>

                </div>
            </div>

            <div className="max-w-10/12 h-[0.5px] bg-white/10 mx-auto"/>
            <div className="h-30 flex items-center justify-center max-w-10/12 mx-auto">
                <p className="text-white/40 text-sm">© 2026 Encrevents. Todos os direitos reservados.</p>

            </div>

        </section>
    )
}