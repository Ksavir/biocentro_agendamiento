'use client'

import React from "react"
import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <div className="dark:text-white flex flex-col items-center justify-center w-full h-16 p-4 border-t dark:border-gray-300">
                <a
                    className="flex items-center justify-center gap-2 p-2"
                    href="https://www.telectronic.cl"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Desarrollado por {' '}
                    <Image
                        src="/logo_telectronic.png"
                        alt="telectronic logo"
                        className="ml-2"
                        width={50}
                        height={50}
                    />
                </a>
                <p>Telecomunicaciones e Informática @2023</p>
            </div>
        </footer>
    )
}