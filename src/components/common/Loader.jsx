import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        const timer=setTimeout(()=>{

            setLoading(false);

        },2500);

        return()=>clearTimeout(timer);

    },[]);

    return(

        <AnimatePresence>

        {

loading&&(

<motion.div

initial={{opacity:1}}

exit={{opacity:0}}

transition={{duration:.8}}

className="fixed inset-0 bg-[#111] z-[9999] flex items-center justify-center"

>

<motion.h1

initial={{scale:.8}}

animate={{scale:1}}

transition={{

repeat:Infinity,

duration:1,

repeatType:"reverse"

}}

className="text-6xl text-white font-black"

>

RL.

</motion.h1>

</motion.div>

)

}

</AnimatePresence>

)

}