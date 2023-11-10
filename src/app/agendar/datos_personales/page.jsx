import React from 'react';
import Navbar from '../../../components/Navbar';
import Link from 'next/link';

export default function Formulario() {
    return (
        <>
        <Navbar/>
            <div className="flex flex-col items-center justify-center h-screen dark">
                <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-xl p-12">
                    <h2 className="text-2xl font-bold text-center text-emerald-500 mb-4">Reserva Médica</h2>

                    <form className="flex flex-wrap">
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-600 border-2  border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Full Name"
                        />
                        <input
                            type="email"
                            className="bg-gray-100 text-gray-600 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="ejemplo@correo.com"
                        />
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-600 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="+56 9 1234 5678 "
                        />
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-600 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
                            placeholder="XX.XXX.XXX-X"
                        />
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-600 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Dirección"
                        />
                        <input
                            type="text"
                            className="bg-gray-100 text-gray-600 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
                            placeholder="Comuna"
                        />
                        <input
                            type="date"
                            className="bg-gray-100 text-gray-400 border-2 border-emerald-500 rounded-md p-2 mb-4
                            focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full"
                            placeholder="Date of Birth"
                        />
                        <Link href="/agendar/especialidad">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-3xl mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                            >
                                Continuar
                            </button>
                        </Link>

                    </form>
                </div>
            </div>

        </>
    )
}

// <>

//     <div className="w-full max-w-[300px] bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Form</h2>

//         <form className="flex flex-col">
//             <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Full Name" />
//             <input type="email" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Email" />
//             <input type="number" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Phone Number" />
//             <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Company Name" />
//             <input type="text" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Job Title" />
//             <input type="date" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Date of Birth" />
//             <textarea name="message" className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" placeholder="Message"></textarea>

//             <button type="submit" className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Submit</button>
//         </form>
//     </div>

// </>

//     <>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img
//                     className="mx-auto h-10 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                     alt="Your Company"
//                 />
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//                     Sign in to your account
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form className="space-y-6" action="#" method="POST">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                             RUT
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                             Nombre Completo
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>                        <div>
//                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
//                             Fecha de Nacimiento
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
//                                 Password
//                             </label>
//                             <div className="text-sm">
//                                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
//                                     Forgot password?
//                                 </a>
//                             </div>
//                         </div>
//                         <div className="mt-2">
//                             <input
//                                 id="password"
//                                 name="password"
//                                 type="password"
//                                 autoComplete="current-password"
//                                 required
//                                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Sign in
//                         </button>
//                     </div>
//                 </form>

//                 <p className="mt-10 text-center text-sm text-gray-500">
//                     Not a member?{' '}
//                     <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//                         Start a 14 day free trial
//                     </a>
//                 </p>
//             </div>
//         </div>
//     </>
