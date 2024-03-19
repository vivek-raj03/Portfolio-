import { useState } from 'react'
import { motion } from 'framer-motion';
import './Border.css'

function Pcard(props) {
    const { title, description,address } = props.data;
    const[isOpen,setIsOpen] = useState(false);
    return (
        <>
            <motion.div transition={{layout:{duration:2}}}layout onClick={()=>setIsOpen(!isOpen)} className='bg-black w-80 h-80 text-white flex flex-col justify-center items-center border-2 border-slate-50 rounded-xl'>
                <motion.h2 layout="position" className='text-3xl font-roberto mb-4 text-orange-500 text-shadow'>{title}</motion.h2>
                {isOpen && (
                    <>
                <p className='text-center'>{description}</p>
                <a href={address} target='blank'>Click here</a>
                </>
                )}
            </motion.div>
        </>

    )
}

export default Pcard