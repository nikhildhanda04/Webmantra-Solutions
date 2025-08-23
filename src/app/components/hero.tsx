'use client';

import { ChartNoAxesCombined as Chart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero(){
    return(
        <>
<div>
<div className="w-full flex flex-col min-h-screen">
<div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />

        <div className="flex flex-col gap-16 py-28 px-4 items-center z-99">
            
            <div className="bg-gradient-to-bl text-xs md:text-lg from-1% from-[#6366f1]/[0.3] to-[#ffffff] font-[poppins] text-neutral-700 px-7 py-2 border border-stone-200 rounded-full">
                reach levels you never knew existed
            </div>

            <div className="text-3xl md:text-7xl font-secondary font-medium text-center tracking-tight text-zinc-800">
                Elevate Your Business  with <br /> <span className="font-bold">Web Mantra Solutions</span>
            </div>

            <div className="text-sm md:text-lg font-para text-stone-400 md:px-96 text-center">
                Empowering your business with a stunning website that captivates your audience and drives results. <br />
                Our team of experts crafts custom solutions tailored to your unique needs, ensuring a seamless online presence that stands out in the digital landscape.
            </div>

        <motion.div 
        animate={{
          y: [0, -10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className='relative bg-gradient-to-tl left-40 from-[#6366f1]/[0.3] to-[#ffffff] rounded-3xl p-5 shadow-[0px_3px_18px_1px_rgba(4,4,4,0.2)] '>
            <Chart/>
        </motion.div>
        </div>

</div>
</div>
        </>
    )
}