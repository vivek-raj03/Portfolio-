import { useState } from 'react'
import { motion } from 'framer-motion';
import './Border.css'

function Pcard() {
    const[isOpen,setIsOpen] = useState(false);
    return (
        <>
            <motion.div transition={{layout:{duration:2}}}layout onClick={()=>setIsOpen(!isOpen)} className='bg-black w-96 h-96 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl'>
                <motion.h2 layout="position" className='text-3xl font-roberto mb-4 text-orange-500 text-shadow'>Technical Skills</motion.h2>
                {isOpen && (
                <p className='text-center'>Proficient in<span className='text-orange-600'>Java</span>  with expertise in C, C++, and Python, showcasing versatile programming skills across multiple languages. adept at crafting robust solutions and leveraging diverse toolsets to tackle complex challenges.</p>
                )}
            </motion.div>
        </>

    )
}

export default Pcard