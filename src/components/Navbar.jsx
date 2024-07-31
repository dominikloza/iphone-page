import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from '../constans';

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex items-center w-full screen-max-width">
                <img src={appleImg} alt="Apple Logo" width={14} height={18} />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navLists.map((nav) => {
                        return <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
                            {nav}
                        </div>
                    })}
                </div>
                <div className="cursor-pointer flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
                    <img src={searchImg} alt="search icon" width={18} height={18} />
                    <img src={bagImg} alt="bag incon" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar