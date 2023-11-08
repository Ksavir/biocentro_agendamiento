'use client'

import React from 'react';
import Navbar from '../../components/Navbar';
import EspecialidadesMedicas from '../../components/CartaEspecialidad';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Especialidad() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-gray-300 p-20">
                    <div className="">
                        <div className="text-center">
                            <h3 className="mb-5 text-lg text-center font-medium text-gray-900 dark:text-black">Reserva Médica</h3>       
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-2">
                        <h3 className="mb-5 text-lg font-medium text-gray-300">Selecciona una especialidad:</h3>
                        <div className="join mb-6">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item" placeholder="Search" />
                                </div>
                            </div>
                            <select className="select select-bordered join-item">
                                <option disabled selected>Filter</option>
                                <option>Sci-fi</option>
                                <option>Drama</option>
                                <option>Action</option>
                            </select>
                            <div className="indicator">
                                <button className="btn join-item bg-green-700">Buscar</button>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3 justify-around">
                            <EspecialidadesMedicas area="Medicina General" icon="pill" id="medicina-general" />
                            <EspecialidadesMedicas area="Dental" icon="syringe" id="dental" />
                            <EspecialidadesMedicas area="Kinesiologia" icon="cross" id="kinesiologia" />
                            <EspecialidadesMedicas area="Nutricionista" icon="salad" id="nutricionista" />
                            <EspecialidadesMedicas area="Urologia" icon="biohazard" id="urologia" />
                            <EspecialidadesMedicas area="Examenes" icon="microscope" id="examenes" />
                            <EspecialidadesMedicas area="Pediatria" icon="cross" id="pediatria" />
                            <EspecialidadesMedicas area="Medicina Familiar" icon="cross" id="medicina-familiar" />
                            <EspecialidadesMedicas area="Psicologia" icon="cross" id="psicologia" />
                            <EspecialidadesMedicas area="Matrona" icon="cross" id="matrona" />
                            <EspecialidadesMedicas area="Ginecologia" icon="cross" id="ginecologia" />
                            <EspecialidadesMedicas area="Endocrinologia" icon="cross" id="endocrinologia" />
                            <EspecialidadesMedicas area="Oftalmologia" icon="cross" id="oftalmologia" />
                            <EspecialidadesMedicas area="Traumatologia" icon="cross" idcross="traumatologia" />
                            <EspecialidadesMedicas area="Psiquiatria" icon="cross" id="psiquiatria" />
                            <EspecialidadesMedicas area="Neurologia" icon="cross" id="neurologia" />
                            <EspecialidadesMedicas area="Dermatologia" icon="cross" id="dermatologia" />
                            <EspecialidadesMedicas area="Podologia" icon="cross" id="podologia" />
                            <EspecialidadesMedicas area="Geriatria" icon="cross" id="geriatria" />
                            <EspecialidadesMedicas area="Medicina Interna" icon="cross" id="medicina-interna" />
                            <EspecialidadesMedicas area="Gastroenterologia" icon="cross" id="gastroenterologia" />
                            <EspecialidadesMedicas area="Nefrologia" icon="cross" id="nefrologia" />
                        </div>
                    </div>
                    <div className=" text-white flex justify-around">
                        <Link href="/formulario">
                            <button className="rounded-3xl bg-red-600 hover:bg-red-400 w-32 p-3" >
                                Volver
                            </button>
                        </Link>
                        <Link href="/horarios">
                            <button className="rounded-3xl bg-green-700 hover:bg-green-500 w-32 p-3">
                                Confirmar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
};
