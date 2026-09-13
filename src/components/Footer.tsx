import React from 'react';
import logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <div className="divider"></div>
            <div className='container mx-auto max-w-6xl px-8'>
                <div className='grid grid-cols-5'>
                    <div className='col-span-2 grid grid-rows-3 gap-3 pr-4'>
                        <img src={logo} alt="" />
                        <p>
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className='grid grid-cols-3'>
                            <p><a href="https://github.com/">Github</a></p>
                            <p><a href="https://x.com/">Twiter</a></p>
                            <p><a href="https://www.linkedin.com/">LinkedIn</a></p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h1>PRODUCT</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75'>
                            <p>Home</p>
                            <p>Technologies</p>
                            <p>Projects</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h1>COMPANY</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75'>
                            <p>About</p>
                            <p>Contact</p>
                            <p>Careers</p>
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <h1>LEGAL</h1>
                        <div className='mt-4 grid grid-rows-3 gap-1 pb-4.75'>
                            <p>Privacy Policy</p>
                            <p>Terms of Service</p>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className='grid grid-cols-12 gap-4 pt-6'>
                    <p className='col-span-10'>© 2026 Dev Stack. All rights reserved.</p>
                    <p className='col-span-1'>Privacy</p>
                    <p className='col-span-1'>Terms</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;