'use client'

import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import EspecialidadesMedicas from '../../../components/CartaEspecialidad';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function Especialidad() {

    const especialidadesMedicas = [
        "Medicina General",
        "Kinesiologia",
        "Nutricionista",
        "Urologia",
        "Examenes",
        "Pediatria",
        "Medicina Familiar",
        "Psicologia",
        "Matrona",
        "Ginecologia",
        "Endocrinologia",
        "Oftalmologia",
        "Traumatologia",
        "Psiquiatria",
        "Neurologia",
        "Dermatologia",
        "Podologia",
        "Geriatria",
        "Medicina Interna",
        "Gastroenterologia",
        "Nefrologia",
    ];

    const especialidadesOrdenadas = especialidadesMedicas.sort();
    console.log(especialidadesOrdenadas);

    const [especialidadMedica, setEspecialidadMedica] = useState('');

    const [mostrarEspecialidades, setMostrarEspecialidades] = useState(false);

    const handleEspecialidadChange = (e) => {
        setEspecialidadMedica(e.target.value);
    };

    const handleBuscarClick = () => {
        setMostrarEspecialidades(true);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="bg-gray-200 rounded-xl shadow-lg p-20">
                    <div className="">
                        <div className="text-center">
                            <h3 className="mb-5 text-lg text-center text-emerald-600 font-bold">Reserva Médica</h3>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center py-2">
                        <h3 className="mb-5 text-lg font-medium text-gray-700">Selecciona una especialidad:</h3>
                        <div className="join mb-6">
                            <select
                                className="select select-bordered join-item"
                                name="especialidadMedica"
                                onChange={handleEspecialidadChange}
                            >
                                <option disabled selected>Especialidad médica</option>
                                {especialidadesOrdenadas.map((especialidad) => (
                                    <option key={especialidad} value={especialidad}>{especialidad}</option>
                                ))}
                            </select>
                            <div className="indicator">
                                <button className="btn join-item bg-green-700 hover:bg-green-500 text-white" onClick={handleBuscarClick}>Buscar</button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-wrap gap-3">
                            {mostrarEspecialidades && <EspecialidadesMedicas area={especialidadMedica} icon="cross" />}
                            {/* <EspecialidadesMedicas area="Medicina General" icon="pill" id="medicina-general" />
                            <EspecialidadesMedicas area="Dental" icon="syringe" id="dental" />
                            <EspecialidadesMedicas area="Kinesiologia" icon="cross" id="kinesiologia" />
                            <EspecialidadesMedicas area="Nutricionista" icon="salad" id="nutricionista" /> */}
                            {/* <EspecialidadesMedicas area="Urologia" icon="biohazard" id="urologia" />
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
                            <EspecialidadesMedicas area="Nefrologia" icon="cross" id="nefrologia" /> */}
                        </div>
                    </div>
                    <div className=" text-white flex justify-around p-6">
                        <Link href="/datos_personales">
                            <button className="rounded-3xl bg-red-600 hover:bg-red-400 w-32 p-3" >
                                Volver
                            </button>
                        </Link>
                        <Link href="/agendar/horas_disponibles">
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
