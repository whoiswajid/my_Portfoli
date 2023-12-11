
import { IoCloudDownloadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { GoProject } from "react-icons/go";
const NavBar = () => {

    const navOptions = <>
        <li className="hover:text-blue-400"><Link to='/'><IoHome />Home</Link></li>
        <li className="hover:text-blue-400"><Link to='/aboutMe'><FaAddressCard />About Me</Link></li>
        <li className="hover:text-blue-400"><Link to='/projects'><GoProject />Projects</Link></li>
        <li className="hover:text-blue-400"><Link to='/'></Link></li>
        
    </>


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl font-serif hover:text-blue-400">Daiyan<span className="text-blue-400">W</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                    <a href="/public/Salam.pdf" download className="btn text-blue-400" > <IoCloudDownloadSharp />  DownLoad Resume</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;