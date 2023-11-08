'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartaHorarios from '../../components/CartaHorario';
import Modal from '../../components/Modal';
import Link from 'next/link';
import Horas from '../../components/Horas';


export default function Horarios() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-gray-100 p-36 rounded-xl shadow-xl">
                    <div className="text-center">
                        <h3 className="mb-1 text-3xl text-center font-bold text-gray-900 dark:text-green-500">Reserva Médica</h3>
                        <p>Centro Médico</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4">
                        <CartaHorarios
                            doctor="Dr. Juan Perez"
                            especialidad="Medicina General"
                            id="medicina-general"
                        />

                        <CartaHorarios
                            doctor="Dr. Kevin Rivas"
                            especialidad="Oncologia"
                            id="oncologia"
                        />

                        <CartaHorarios
                            doctor="Dr. Thomas Muñoz"
                            especialidad="Dental"
                            id="dental"
                        />
                    </div>
                    <div className="flex justify-between">
                        <Link href="/tipo_consulta">
                            <button className="rounded-3xl bg-red-600 w-32 p-3 text-white font-bold" >
                                Volver
                            </button>
                        </Link>
                        <Modal />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}