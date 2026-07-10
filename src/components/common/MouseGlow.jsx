import { motion } from "framer-motion";
import { useEffect,useState } from "react";

export default function MouseGlow(){

const[pos,setPos]=useState({

x:0,

y:0

});

useEffect(()=>{

window.addEventListener("mousemove",(e)=>{

setPos({

x:e.clientX,

y:e.clientY

})

})

},[]);

return(

<motion.div

animate={{

x:pos.x-200,

y:pos.y-200

}}

transition={{

type:"tween"

}}

className="fixed w-[400px] h-[400px] rounded-full blur-[150px] bg-[#D2B48C40] pointer-events-none"

/>

)

}