import React from "react";

export default function Horas({ hora, id }) {
    return (
        <div class="flex flex-wrap">
            <input type="checkbox" id={id} class="peer hidden" />
            <label htmlFor={id} className="select-none cursor-pointer rounded-lg border-2 border-emerald-600
             py-3 px-6 font-bold text-gray-600 transition-colors duration-200 
             ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900
             peer-checked:border-gray-200 "> {hora} </label>
        </div>
    )
}