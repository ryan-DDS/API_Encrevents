import Link from "next/link";

export default function Events() {
    return (
        <section  id="events" className="bg-black/95 px-18 py-20">

            {/* titulo */}
            <div className="mb-10">
                {/* Tag "EM DESTAQUE" com barrinha vermelha */}
                <div className="flex gap-x-2 items-center mb-4">
                    <div className="w-5 h-[0.5px] bg-red-600 rounded-full"/>
                    <span className="text-red-600 text-sm font-medium tracking-widest">EM DESTAQUE</span>
                </div>

                {/* Título à esquerda, link à direita */}
                <div className="flex justify-between items-end">
                    <h1 className="text-6xl font-bold uppercase text-white">
                        Próximos <br/> Eventos
                    </h1>
                    <Link href="#events" className="uppercase text-white underline hover:text-red-600 transition-all duration-300 ">ver todos →</Link>
                </div>
            </div>

            {/* Grid principal: coluna esquerda (card grande) + coluna direita (4 cards) */}
            <div className="grid grid-cols-2 gap-[1px] rounded-2xl bg-white/10  overflow-hidden mb-[60]">

                {/* CARD GRANDE */}
                <div className="relative group overflow-hidden">

                    {/* imagem */}
                    <div className="h-[550px] bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/plantao.png')" }}/>

                    {/* hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white text-3xl font-bold uppercase tracking-widest">Plantão</span>
                    </div>

                </div>

                {/* 4 CARDS PEQUENOS */}
                <div className="grid grid-cols-2 grid-rows-2 gap-[1px]">

                    {/* Card pequeno 1 */}
                    <div className="relative group overflow-hidden">
                        <div className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/ufc.png')" }}/>    
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-xl font-bold uppercase tracking-widest">UFC</span>
                        </div>
                    </div>

                    {/* Card pequeno 2 */}
                    <div className="relative group overflow-hidden">
                        <div className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/master.png')" }}/>             
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-xl font-bold uppercase tracking-widest">Masterchef</span>
                        </div>
                    </div>

                    {/* Card pequeno 3 */}
                    <div className="relative group overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/liberta.png')" }}/>    
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-xl font-bold uppercase tracking-widest">Libertadores</span>
                        </div>
                    </div>

                    {/* Card pequeno 4 */}
                    <div className="relative group overflow-hidden">
                    <div className="h-full bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:scale-105" style={{ backgroundImage: "url('/images/lolla.png')" }}/>    

                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <span className="text-white text-xl font-bold uppercase tracking-widest">Lollapalooza</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}