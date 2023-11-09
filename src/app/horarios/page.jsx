import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CartaHorario from '../../components/CartaHorario';
import Modal from '../../components/Modal';
import Link from 'next/link';
import Horas from '../../components/Horas';

export default function Horarios() {
    const doctores = [
        {
            id: 1,
            nombre: "Dr. Juan Perez",
            usuario: "@dayahnarar",
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
            <div className="flex flex-col items-center justify-center">
                <div className="bg-gray-100 p-32 rounded-xl shadow-xl">
                    <div className="text-center">
                        <h3 className="mb-1 text-3xl text-center font-bold text-gray-900 dark:text-green-500">Reserva Médica</h3>
                        <p>Centro Médico</p>
                    </div>
                    <div className="flex flex-col gap-4">
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
                        <Link href="/tipo_consulta">
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