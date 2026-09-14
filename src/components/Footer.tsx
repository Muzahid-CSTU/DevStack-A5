import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className='container mx-auto max-w-6xl px-6 md:px-8'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-0'>
                    <div className='md:col-span-2 grid grid-rows-3 gap-3 md:pr-4 text-center md:text-left items-center md:items-stretch'>
                        <img src={logo} alt="" className='mx-auto md:mx-0 w-32 md:w-auto' />
                        <p className='text-[#64748B]'>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='grid grid-cols-3 text-[#475569] font-semibold'>
                            <p><a href="https://github.com/">Github</a></p>
                            <p><a href="https://x.com/">Twiter</a></p>
                            <p><a href="https://www.linkedin.com/">LinkedIn</a></p>
                        </div>
                    </div>
                    <div className='hidden md:block col-span-1'>
                        <h1 className='font-bold'>PRODUCT</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75 text-[#64748B]'>
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className='hidden md:block col-span-1'>
                        <h1 className='font-bold'>COMPANY</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75 text-[#64748B]'>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className='hidden md:block col-span-1'>
                        <h1 className='font-bold'>LEGAL</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75 text-[#64748B]'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='flex flex-row justify-between items-center gap-2 pt-6 text-[#64748B]'>
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <p>Privacy</p>
                        <p>Terms</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;