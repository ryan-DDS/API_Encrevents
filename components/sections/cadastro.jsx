import Link from "next/link"

export default function Cadastro() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/login.png')" }}>

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"/>

            {/* card formulário */}
            <div className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-2xl px-10 py-12">

                {/* logo */}
                <div className="flex items-center gap-x-2 mb-8">
                    <Link href="/" className="bg-red-700 px-3 py-1 rounded-lg text-white font-bold text-2xl">E</Link>
                    <Link href="/" className="text-white font-bold text-xl tracking-widest">ENCREVENTS</Link>
                </div>

                {/* bem-vindo */}
                <h1 className="text-white text-3xl font-bold mb-1">Bem-vindo</h1>
                <p className="text-white/50 text-sm mb-8">Crie uma conta para continuar</p>

                {/* formulário */}
                <form className="flex flex-col gap-y-4">

                    {/* nome */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Nome</p>
                        <input type="text" placeholder="nome" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>

                    {/* evento */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Evento</p>
                        <input type="text" placeholder="evento" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>

                    {/* telefone */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Telefone</p>
                        <input type="text" placeholder="(12) 34567-8912" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>

                    {/* email */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Email</p>
                        <input type="email" placeholder="@email.com" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>


                    {/* senha */}
                    <div className="flex flex-col gap-y-1">
                        <p className="text-white/70 text-xs tracking-widest uppercase">Senha</p>
                        <input type="password" placeholder="senha" className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-600 transition-all duration-300"/>
                    </div>


                    {/* botao */}
                    <Link href="#" type="submit" className="flex justify-center bg-red-700 text-white text-sm font-bold uppercase tracking-widest py-3 rounded-sm hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300 mt-2">
                        cadastrar-se
                    </Link>
                </form>


                {/* linha */}
                <div className="flex items-center gap-x-4 my-6">
                    <div className="flex-1 h-[0.5px] bg-white/10"/>
                    <span className="text-white/30 text-xs">ou</span>
                    <div className="flex-1 h-[0.5px] bg-white/10"/>
                </div>


                {/* cadastre-se */}
                <p className="text-center text-white/50 text-sm">
                    Já possui uma conta?{" "}
                    <Link href="/login" className="text-red-600 hover:text-red-500 transition-all duration-300">Faça login</Link>
                </p>
            </div>
        </section>
    )
}
