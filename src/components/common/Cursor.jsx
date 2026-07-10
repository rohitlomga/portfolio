import { motion } from "framer-motion";
import { useEffect,useState } from "react";

export default function Cursor(){

const[position,setPosition]=useState({

x:0,

y:0

});

useEffect(()=>{

const move=(e)=>{

setPosition({

x:e.clientX,

y:e.clientY

})

}

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return(

<motion.div

animate={{

x:position.x-10,

y:position.y-10

}}

transition={{

type:"spring",

stiffness:500,

damping:28

}}

className="fixed top-0 left-0 w-5 h-5 rounded-full bg-[#7B5D42] pointer-events-none z-[999]"

/>

)

}