import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import CartaHorario from '../../../components/CartaHorario';
import Modal from '../../../components/Modal';
import Link from 'next/link';
import Horas from '../../../components/Horas';

export default function Horarios() {
    const doctores = [
        {
            id: 1,
            nombre: "Dr. Deadpool de Jesus",
            usuario: "@Deadpool",
            especialidad: "Medicina General"
        },
        {
            id: 2,
            nombre: "Dr. Kevin Rivas",
            usuario: "@kevinsavir",
            especialidad: "Oncologia"
        },
        {
            id: 3,
            nombre: "Dr. Thomas Muñoz",
            usuario: "@midudev",
            especialidad: "Dental"
        }
    ]

    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="bg-gray-100 p-10 rounded-xl shadow-xl items-center">
                    <div className="text-center">
                        <h3 className="mb-1 text-3xl text-center font-bold text-gray-900 dark:text-green-500">Reserva Médica</h3>

                    </div>
                    <div className="flex flex-col gap-4 items-center">
                        {doctores.map((doctor) => (
                            <CartaHorario
                                key={doctor.id}
                                nombre={doctor.nombre}
                                usuario={doctor.usuario}
                                especialidad={doctor.especialidad}
                            />
                        ))}

                    </div>
                    <div className="flex justify-center mt-4">
                        <Link href="/agendar/especialidad">
                            <button className="rounded-3xl bg-red-600 w-32 p-3 text-white font-bold" >
                                Volver
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </>
    )
}