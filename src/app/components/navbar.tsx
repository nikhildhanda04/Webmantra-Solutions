export default function Navbar(){
    return(
        <>
        <div className="flex flex-row  items-center w-full justify-between px-4 md:px-36 py-6 z-99">

            <div className="font-primary text-stone-900 text-2xl font-bold ">
                WebMantra Solutions
            </div>

            <div className="hidden md:flex flex-row gap-8 font-secondary">
                 <div className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Features</div>
                 <div className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">About Us</div>
                 <div className="hover:text-primary transition-all duration-300 hover:underline underline-offset-3">Faq</div>

            </div>
        </div>
        </>
    )
}