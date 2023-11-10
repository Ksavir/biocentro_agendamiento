import Link from "next/link"

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-32">
        <div className="bg-gray-200 rounded-xl shadow-lg p-20">
          <h1 className="text-black font-bold my-5">BIOCENTRO</h1>
          <Link href="/agendar/datos_personales">
            <button className="btn bg-emerald-700 text-white">Continuar</button>
          </Link>
        </div>
      </div>
    </>
  )
}

