import React from "react";
import Image from "next/image";
import { Pill, Cross, Salad, Biohazard, Microscope, Syringe } from "lucide-react";


export default function EspecialidadesMedicas({ area, icon, id }) {

    const iconMap = {
        pill: <Pill className="mx-2 w-6 h-6" />,
        cross: <Cross className="mx-2 w-6 h-6" />,
        salad: <Salad className="mx-2 w-6 h-6" />,
        biohazard: <Biohazard className="mx-2 w-6 h-6" />,
        microscope : <Microscope className="mx-2 w-6 h-6" />,
        syringe: <Syringe className="mx-2 w-6 h-6" />
    }

    return (
        <>
            <div class="flex">
                <input type="checkbox" id={id} className="peer hidden" />
                <label htmlFor={id} className=" w-full text-black flex gap-x-2 items-center select-none cursor-pointer rounded-lg border-2 border-emerald-600 py-3 px-6 font-bold transition-colors duration-200 ease-in-out peer-checked:bg-green-700 peer-checked:text-gray-300 peer-checked:border-green-700 ">
                    {iconMap[icon]}
                    {area}
                </label>
            </div>
        </>
    )
}

