import Link from "next/link";

export default function More() {
    return (
        <section 
            className="relative flex items-center justify-center bg-cover bg-center py-40" style={{ backgroundImage: "url('/images/quad_vermelho.png')" }}>

            <div className="relative text-center text-white">
                {/* Tag acima do título */}
                <div className="flex items-center justify-center gap-x-3 mb-8">
                    <div className="w-8 h-[0.5px] bg-white/50"/>
                    <span className="text-white/70 text-xs tracking-[4px] uppercase">Encrevents</span>
                    <div className="w-8 h-[0.5px] bg-white/50"/>
                </div>

                <h1 className="text-8xl font-bold uppercase leading-none mb-6 tracking-wider">Pronto para <br/> Viver Mais?</h1>



                <p className="text-white/70 text-lg mb-12 leading-relaxed">Crie sua conta gratuita e tenha acesso a <br/> eventos exclusivos antes de todo mundo.</p>

                {/* botao com hover */}
                <Link href="#" className="inline-block bg-white text-red-600 font-bold uppercase tracking-widest text-sm px-12 py-4 rounded-sm hover:bg-red-600 hover:text-white hover:-translate-y-1 hover:shadow-2xl transition-all duration-300">
                    Comece agora — é grátis
                </Link>

            </div>
        </section>
    )
}