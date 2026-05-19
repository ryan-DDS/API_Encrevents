import Link from "next/link";
export default function Hero() {
    return (
        <section className="h-screen relative flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: "url('/images/hero.png')" }}>

            <div className="relative text-left text-white px-15">
                {/* title */}
                <h1 className="text-8xl font-bold mb-4 tracking-wider">VIVA <br /> MOMENTOS</h1>
                <h1 className="text-red-600 text-8xl font-bold mb-4 tracking-wider">ÚNICOS.</h1>
                <p className="text-gray-300 text-xl mb-8">A plataforma que conecta pessoas a experiências inesquecíveis.<br/>Festas, shows, workshops e muito mais — tudo em um só lugar.</p>
                {/* buttons */}
                <div className="flex gap-x-6">
                    <Link href="#events" className="bg-red-700 px-7 py-3 rounded-sm text-white hover:bg-red-600 transition-all hover:shadow-lg duration-300 hover:shadow-red-500/50">Explorar Eventos</Link>
                    <Link href="#footer" className="bg-black px-7 py-3 rounded-sm text-white hover:bg-gray-900/40 border-[1px] border-gray-500/30 transition-all duration-300">Como Funciona</Link>
                </div>
            </div>
            {/* stats */}
            <div className="absolute right-16 bottom-20 flex gap-6">

                {/* stat 1 */}
                <div className="border-r-2 border-red-600 pr-4 text-right">
                    <p className="text-white font-bold text-3xl">+2.4K</p>
                    <p className="text-white/50 text-xs tracking-widest uppercase">Eventos Realizados</p>
                </div>

                {/* stat 2 */}
                <div className="border-r-2 border-red-600 pr-4 text-right">
                    <p className="text-white font-bold text-3xl">98K</p>
                    <p className="text-white/50 text-xs tracking-widest uppercase">Participantes</p>
                </div>

                {/* stat 3 */}
                <div className="border-r-2 border-red-600 pr-4 text-right">
                    <p className="text-white font-bold text-3xl">4.9★</p>
                    <p className="text-white/50 text-xs tracking-widest uppercase">Avaliação Média</p>
                </div>
            </div>
        </section>
    );
}