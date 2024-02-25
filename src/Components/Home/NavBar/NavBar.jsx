import logo from '../../../assets/logo.png'

const NavBar = () => {
    return (
        <div className="navbar  container mx-auto border-x-2 border-red-950 m-2 rounded-xl shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <img className='w-[90px] hidden lg:block' src={logo} alt="logo" />
            </div>
            
            <div className="navbar-end">
            <div className="navbar-center hidden lg:flex mr-10">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;