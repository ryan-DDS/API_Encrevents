import Link from "next/link";

export default function Dashboard() {
  return (
        <section
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/login.png')" }}>
            <div className="flex flex-col items-center gap-x-2 mb-8">
              <h1 className="text-white text-3xl font-bold mb-2">Dashboard</h1>
              <Link href="/" className="text-white p-2 px-5 rounded-md bg-red-600 hover:bg-red-700 transition-all duration-300">Voltar</Link>
            </div>
        </section>
    )
}