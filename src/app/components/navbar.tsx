export default function Navbar(){
    return(
        <>
        <div className="flex flex-row  items-center w-full justify-between px-36 py-6 z-99">

            <div className="font-[poppins] text-stone-900 text-2xl font-medium ">
                WebMantra Solutions
            </div>

            <div className="flex flex-row gap-8 font-[poppins]">
                 <div>Home</div>
                 <div>Features</div>
                 <div>About Us</div>
                 <div>Faq</div>

            </div>
        </div>
        </>
    )
}