import { useState } from "react";
import { Link} from "react-router-dom";

import { IKImage } from 'imagekitio-react';
import Image from '../components/Image'


const Navbar = () => {

    const [open, setOpen] = useState(false);



    return ( 
        <div className='w-full h-16 md:h-20 flex items-center justify-between'>
            {/* LOGO */}
            <Link to="/" className='flex items-center gap-4 text-2xl font-bold'>

                <Image src="logo.png" alt="Lama Logo" width={32} height={32}/>


                <span>lamalogo</span>
            </Link>

            {/* MOBILE MENU, md:hidden says screen size md or bigger, this is hidden*/}
            <div className="md:hidden">
                
                <div className="cursor-pointer text-4xl"
                    onClick={()=> setOpen((prev)=>!prev)} 
                >
                    {open ? "X" : "="}
                </div>


                {/* MOBILE LINK LIST */}
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>

                    <Link to="">Home</Link>
                    <Link to="">Trending</Link>
                    <Link to="">Most Popular</Link>
                    <Link to="">About</Link>
                    <Link to="">
                        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                    </Link>



                </div>

            </div>

            {/* DESKTOP MENU, says hidden, on screens md or bigger, not hidden and flex */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="">Home</Link>
                <Link to="">Trending</Link>
                <Link to="">Most Popular</Link>
                <Link to="">About</Link>
                <Link to="">
                    <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">Login</button>
                </Link>



            </div>


        </div>
    )
}

export default Navbar;