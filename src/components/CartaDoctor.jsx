"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import Modal from "./Modal"
import Horas from "./Horas"

export default function CartaDoctor({ doctor, especialidad }) {
    return (

        <>
            <button className="btn rounded-3xl w-32 bg-green-600 text-white font-bold" onClick={() => document.getElementById('my_modal_2').showModal()}>Ver Horarios</button>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-gray-100 items-center">
                    <div className="card card-compact w-96 bg-gray-100 text-black text-center mx-auto">
                        <figure>                   
                         <div className="avatar placeholder">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                                <span className="text-xl">KR</span>
                            </div>
                        </div></figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">{doctor}</h2>
                            <p>{especialidad}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                            <Horas hora="10.30"/>
                            <Horas hora="11.00"/>
                            <Horas hora="11.30"/>
                            <Horas hora="12.30"/>
                            <Horas hora="12.30"/>
                            <Horas hora="13.00"/>
                            <Horas hora="13.30"/>
                            <Horas hora="14.00"/>
                            <Horas hora="14.30"/>
                            </div>

                            <div className="card-actions mt-4 justify-center ">
                                <Modal />
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link href="/">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </Link>
                            <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">←</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
