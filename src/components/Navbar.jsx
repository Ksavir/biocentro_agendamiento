import React from "react";
import Image from "next/image"
    ;

export default function Navbar() {
    return (
        <nav className="bg-gray-100 fixed w-full border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4">
                <a href="https://www.bio-centro.cl/" className="flex items-end gap-3">
                    <Image
                        src="/biocentro_logo_no_bg.png"
                        className=""
                        alt="Bio centro logo"
                        width={50}
                        height={50}

                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ml-3 dark:text-black">BioCentro</span>
                </a>
                <div className="flex gap-4">
                    <button type="button" className="btn bg-blue-500 text-white rounded-3xl">Ingreso Medico</button>
                    <button type="button" className="btn bg-red-600 text-white rounded-3xl">Ingreso Paciente</button>
                </div>
            </div>
        </nav>
    )
}