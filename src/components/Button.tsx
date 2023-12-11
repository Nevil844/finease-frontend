import { useState } from "react"
import { MouseEventHandler } from 'react';


interface Props {
    handleClick: MouseEventHandler<HTMLButtonElement>;
    text:string;
}

export default function Button({ handleClick,text }: Props) {

    return (
        <button className='bg-[#1D3557] w-full p-2 rounded-[20px]' onClick={handleClick}>

            <h2 className='text-m text-white font-extrabold text-center '>{text}</h2>
        </button>
    )

}