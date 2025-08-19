export default function Footer(){
    return(
        <>
        <div className="flex flex-col mask-b-from-50% border-t border-neutral-200">

            <div className="flex flex-col md:flex-row justify-between px-4 md:text-left gap-12 md:gap-0 text-center md:px-36 py-24">

                <div className="font-secondary text-2xl">
                    Digitize your business. <br/> Increase your online presence.
                </div>
                <div className="flex flex-row mx-auto md:mx-0 gap-24">

                    <div className="flex flex-col">
                    <div className="font-secondary font-medium text-2xl">
                        Navigation
                    </div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-3">Home</div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-1">Services</div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-1">Pricing</div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-1">Faqs</div>
                    </div>

                    <div className="flex flex-col">
                    <div className="font-secondary font-medium text-2xl">
                        Social
                    </div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-3">X</div>
                    <div className="font-secondary text-lg text-zinc-700 hover:text-primary transition-all duration-200 mt-1">Linkedin</div>
                    </div>


                </div>

            </div>

            <div className="font-primary text-6xl md:text-9xl text-center font-black -mb-[2vw]">
                WEB MANTRA SOL
            </div>

        </div>
        </>
    )
}