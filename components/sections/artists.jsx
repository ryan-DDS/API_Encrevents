import Link from "next/link";

export default function Artists() {

    return (
        <section id="artists" className="bg-black px-18 py-20">

            {/* titulo */}
            <div className="mb-10">
                {/* tracinho */}
                <div className="flex gap-x-2 items-center mb-4">
                    <div className="w-5 h-[0.5px] bg-red-600 rounded-full"/>
                    <span className="text-red-600 text-sm font-medium tracking-widest">LINE-UP</span>
                </div>
                {/* titulo e ver todos */}
                <div className="flex justify-between items-end">
                    <h1 className="text-6xl font-bold uppercase text-white">
                        Artistas <br/> em Destaque
                    </h1>
                    <Link href="#artists" className="uppercase text-white underline hover:text-red-600 transition-all duration-300">ver todos →</Link>
                </div>
            </div>

            {/* grid artistas */}
            <div className="grid grid-cols-4 gap-4 h-[480px]">

                    {/* coluna 1 */}
                    <div className="relative group overflow-hidden rounded-sm border border-white/5">
                        {/* imagem */}
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/matue.png')" }}/>
                        {/* gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
                        {/* nome e genero */}
                        <div className="absolute bottom-0 left-0 p-5 translate-y-2 hover:translate-y-0 transition-all duration-300">
                            <span className="text-red-500 text-xs tracking-widest uppercase mb-1 block">Trap</span>
                            <span className="text-white text-xl font-bold uppercase tracking-wider">Matuê</span>
                        </div>
                        {/* overlay vermelho */}
                        <div className="absolute inset-0 bg-red-600/10 opacity-0 hover:opacity-100 transition-all duration-300"/>
                    </div>

                    {/* coluna 2 */}
                    <div className="relative group overflow-hidden rounded-sm border border-white/5">
                        {/* imagem */}
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/mars.png')" }}/>
                        {/* gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
                        {/* nome e genero */}
                        <div className="absolute bottom-0 left-0 p-5 translate-y-2 hover:translate-y-0 transition-all duration-300">
                            <span className="text-red-500 text-xs tracking-widest uppercase mb-1 block">Pop</span>
                            <span className="text-white text-xl font-bold uppercase tracking-wider">Bruno Mars</span>
                        </div>
                        {/* overlay vermelho */}
                        <div className="absolute inset-0 bg-red-600/10 opacity-0 hover:opacity-100 transition-all duration-300"/>
                    </div>

                    {/* coluna 3 */}
                    <div className="relative group overflow-hidden rounded-sm border border-white/5">
                        {/* imagem */}
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/teto.png')" }}/>
                        {/* gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
                        {/* nome e genero */}
                        <div className="absolute bottom-0 left-0 p-5 translate-y-2 hover:translate-y-0 transition-all duration-300">
                            <span className="text-red-500 text-xs tracking-widest uppercase mb-1 block">Trap</span>
                            <span className="text-white text-xl font-bold uppercase tracking-wider">Teto</span>
                        </div>
                        {/* overlay vermelho */}
                        <div className="absolute inset-0 bg-red-600/10 opacity-0 hover:opacity-100 transition-all duration-300"/>
                    </div>

                    {/* coluna 4 */}
                    <div className="relative group overflow-hidden rounded-sm border border-white/5">
                        {/* imagem */}
                        <div
                            className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105"
                            style={{ backgroundImage: "url('/images/hariel.png')" }}/>
                        {/* gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"/>
                        {/* nome e genero */}
                        <div className="absolute bottom-0 left-0 p-5 translate-y-2 hover:translate-y-0 transition-all duration-300">
                            <span className="text-red-500 text-xs tracking-widest uppercase mb-1 block">Funk</span>
                            <span className="text-white text-xl font-bold uppercase tracking-wider">Hariel</span>
                        </div>
                        {/* overlay vermelho */}
                        <div className="absolute inset-0 bg-red-600/10 opacity-0 hover:opacity-100 transition-all duration-300"/>
                    </div>

            </div>

        </section>
    )
}