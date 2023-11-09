"use client"

import React from 'react';
import { UserCircle2 } from 'lucide-react';
import Horas from './Horas';
import CartaDoctor from './CartaDoctor';


export default function CartaHorarios({ nombre, especialidad, usuario }) {

    const userName = ["@kevinsavir", "@dayahnarar", "@midudev"]

    return (
        <>
            {/* <input type="checkbox"  className="peer hidden" />
                <label className="flex items-center justify-around p-8 w-full h-28 bg-white rounded-xl shadow-lg select-none cursor-pointer border-2
                border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 
                ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900
                peer-checked:border-gray-200 ">
                    <div className="avatar placeholder">
                    <figure>
                            <div className="avatar">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-20">
                                    <img src={`https://unavatar.io/${usuario}`} alt={nombre} />
                                </div>
                            </div>
                        </figure>
                    </div>
                    
                    <section className="block m-3">
                        <div className="pl-3">
                            <h3 className="text-gray-600 font-semibold text-sm">{nombre}</h3>
                            <h3 className=" text-gray-500 text-lg font-bold">{especialidad}</h3>
                        </div>
                    </section> */}

            <div className="collapse bg-gray-200 text-center">
                <input type="checkbox" className="" />
                <div className="collapse-title text-xl font-medium">
                    <div className="avatar">
                        <figure>
                            <div className="avatar">
                                <div className="bg-neutral-focus text-neutral-content rounded-full w-36">
                                    <img src={`https://unavatar.io/${usuario}`} alt={nombre} />
                                </div>
                            </div>
                        </figure>
                    </div>

                    <section className="block m-3">
                        <div className="pl-3">
                            <h3 className="text-gray-600 font-semibold text-sm">{nombre}</h3>
                            <h3 className=" text-gray-500 text-lg font-bold">{especialidad}</h3>
                        </div>
                    </section>
                </div>
                <div className="collapse-content">
                    <CartaDoctor />
                </div>
            </div>



            {/* </div> */}

        </>
    )
}

{/* <div class="flex flex-wrap">
<input type="checkbox" id={id} class="peer hidden" />
<label htmlFor={id} className="select-none cursor-pointer rounded-lg border-2 border-gray-200
 py-3 px-6 font-bold text-gray-200 transition-colors duration-200 
 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900
 peer-checked:border-gray-200 "> {hora} </label>
</div> */}
{/* <div className="flex items-center p-6 w-1/4 h-28 dark:bg-white rounded-xl shadow-lg border-4  border-blue-600">
<section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-white">
    <svg className="mx-2" width="50" height="50" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" ><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
</section>
<section className="block border-4 border-blue-600 m-3">
    <div className="pl-3">
        <h3 className="text-gray-600 font-semibold text-sm">{doctor}</h3>
        <h3 className=" text-gray-500 text-lg font-bold">{especialidad}</h3>
    </div>
</section>
</div> */}