import Link from "next/link"

export default function Dashboard(){
    return(
        <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/login.png')" }}>
            <div>
                <Link href="/" className="text-white bg-red-600 hover:bg-red-700 transition-all duration-300 p-3 rounded-4xl">Ver Dashboard</Link>
            </div>
        </section>
    )
}