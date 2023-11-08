"use client"

import React from 'react';
import { UserCircle2 } from 'lucide-react';
import Horas from './Horas';
import CartaDoctor from './CartaDoctor';


export default function CartaHorarios({ doctor, especialidad, avatar, id }) {

    // const avatarMap = { kevin : <img src="https://joeschmoe.io/api/v1/male/kevin" />



    return (
        <>
            {/* <div className="flex items-center p-8 w-full h-28 bg-white rounded-xl shadow-lg"> */}
                {/* <section className="flex justify-center items-center w-14 h-14 rounded-full shadow-md"> */}
                <input type="checkbox" id={id} className="peer hidden" />
                <label htmlFor={id} className="flex items-center justify-around p-8 w-full h-28 bg-white rounded-xl shadow-lg select-none cursor-pointer border-2
                border-gray-200
                py-3 px-6 font-bold text-gray-200 transition-colors duration-200 
                ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900
                peer-checked:border-gray-200 ">
                    <div className="avatar online placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
                            <span className="text-xl">KR</span>
                        </div>
                    </div>
                    {/* </section> */}
                    <section className="block m-3">
                        <div className="pl-3">
                            <h3 className="text-gray-600 font-semibold text-sm">{doctor}</h3>
                            <h3 className=" text-gray-500 text-lg font-bold">{especialidad}</h3>
                        </div>
                    </section>
                        <CartaDoctor doctor={doctor} especialidad={especialidad}/>
                    {/* <div className="flex flex-wrap gap-2">
                        {/* <Horas hora="10.30" id="10.30"/>
                <Horas hora="11.00" id="11.00"/>
                <Horas hora="11.30" id="11.30"/>
                <Horas hora="12.00" id="12.00"/>
                <Horas hora="12.30" id="12.30"/>
                <Horas hora="13.00" id="13.00"/> 
                    </div> */}
                </label>
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