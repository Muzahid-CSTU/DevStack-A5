import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className=' bg-white h-20 border border-[#f1f5f9FF] flex items-center'>
            <div className='px-8 h-8 container mx-auto max-w-6xl flex justify-between items-center'>
                <img src={logo} alt="logo" />
                <div>
                    <ul className='flex gap-2'>
                        <li className='text-[#DB2777]'>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <button className='btn btn-ghost'>Sign in</button>
                    <button className='btn px-5 py-2.5 bg-[#d91b7e] text-sm  text-white border-none rounded-[9999px]'>Sign up</button>
                </div>
            </div>
            
        </nav>
    );
};

export default Nav;