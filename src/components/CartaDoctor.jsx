"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Modal from "./Modal"
import Horas from "./Horas"

export default function CartaDoctor({ doctor, especialidad }) {

    const horas = ["10.30", "11.00", "11.30", "12.00", "12.30", "13.00"]
    const imageSrc = ["@kevinsavir", "@dayahnarar", "@midudev"]


    return (

        <>
            <div className="card-body">
                <h2 className="card-title">{doctor}</h2>
                <h6 className="text-gray-500">{especialidad}</h6>
                <div className="flex flex-wrap justify-center gap-2">
                    {horas.map((hora, index) => (
                        <Horas key={index} hora={hora} id={hora}/>))}
                </div>
                <div className="card-actions mt-4 justify-center">
                    <Modal />
                </div>
            </div>
        </>
    )
}
