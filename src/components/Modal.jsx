"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Modal() {
    return (
        <>
            <button className="btn rounded-3xl w-32 bg-green-600 text-white font-bold" onClick={() => document.getElementById('my_modal_1').showModal()}>Agendar</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-gray-100 items-center">
                    <h3 className="font-bold text-lg text-center text-emerald-600">Hora Reservada!</h3>
                    <p className="py-4 text-gray-800 font-medium">Estimado paciente, muchas gracias por reservar a través de nuestro portal,
                        le enviaremos la confirmación de la reservar a su correo electrónico y un
                        SMS a su numero de teléfono.
                        <br />
                        <br />
                        <br />
                        Un día antes de su consulta le enviaremos un recordatorio, que tenga un buen dia.</p>
                    <Image
                        src="/check.png"
                        width={70}
                        height={70}
                        className="mx-auto"
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link href="/">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </Link>
                            {/* <Link href="/tipo_consulta"> */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">←</button>
                            {/* </Link>     */}
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}