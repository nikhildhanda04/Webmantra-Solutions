export default function Hero(){
    return(
        <>
<div>
<div className="w-full flex flex-col">
<div
    className="absolute inset-0 z-0"
    style={{
      background: "radial-gradient(125% 125% at 50% 10%, #fff 40%, #6366f1 100%)",
    }}
  />

        <div className="flex flex-col gap-16 py-28 items-center z-99">
            
            <div className="bg-gradient-to-bl from-1% from-[#6366f1]/[0.3] to-[#ffffff] font-[poppins] text-neutral-700 px-7 py-2 border border-stone-200 rounded-full">
                reach levels you never knew existed
            </div>

            <div className="text-7xl font-[poppins] text-center tracking-tight text-zinc-800">
                Elevate Your Business  with <br /> Web Mantra Solutions
            </div>

            <div className="text-lg text-stone-400 px-96 text-center">
                Empowering Your Success with Cutting-Edge SaaS Solutions Built for Scalability, Efficiency, and Growth.
            </div>
        </div>

</div>
</div>
        </>
    )
}