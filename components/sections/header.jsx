import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 h-16 grid grid-cols-3 items-center bg-black/30 backdrop-blur-md">
                <div className="flex gap-x-1.5 items-center justify-start px-4">
                    <h1 className="bg-red-700 px-3 py-1 m-2 rounded-lg text-white font-bold text-2xl">E</h1>
                    <h2 className="text-white font-bold text-xl tracking-widest">ENCREVENTS</h2>
                </div>
                <div className="flex gap-x-6 justify-center">
                    <Link href="#events" className="text-gray-300 hover:text-white transition-all duration-300 text-sm tracking-widest">EVENTOS</Link>
                    <Link href="#footer" className="text-gray-300 hover:text-white transition-all duration-300 text-sm tracking-widest">SOBRE</Link>
                    <Link href="#artists" className="text-gray-300 hover:text-white transition-all duration-300 text-sm tracking-widest">ARTISTAS</Link>
                </div>
                <div className="flex gap-x-4 justify-end items-center px-4">
                    <Link href="/login" className="bg-red-700 px-7 py-2 rounded-sm text-white hover:bg-red-600 transition-all duration-300 text-sm">Entrar</Link>
                    <Link href="/cadastro" className="text-gray-300 hover:text-white transition-all duration-300">Cadastrar-se</Link>
                </div>
            </header>
        </>
    );
}