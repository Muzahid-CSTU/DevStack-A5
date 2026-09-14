import bannerStack from '../assets/banner-stack-2.png'

const Banner = () => {
    return (
        <div className='pt-12 md:pt-24 max-w-6xl mx-auto md:h-105'>
            <div className='grid grid-cols-1 md:grid-cols-12 gap-8 px-6 md:px-8'>
                <div className='col-span-1 md:col-span-7 grid grid-rows-1 items-center'>
                    <div className='grid grid-rows-8 h-auto md:h-[326px] pr-0 md:pr-8'>
                        <div className='pb-6 row-span-4'>
                            <h1 className='font-semibold text-3xl sm:text-4xl md:text-6xl text-center md:text-left'>
                                <span >
                                    Build Your Ideal
                                </span> <br />
                                <span className="bg-linear-to-r from-[#ff5722] via-[#d81b7e] to-[#7c3aed] bg-clip-text text-transparent">
                                    Development Stack
                                </span>
                                
                            </h1>
                        </div>
                        <div className='row-span-3 pr-0 md:pr-1.27 pb-6 md:pb-10 text-base md:text-lg font-normal text-center md:text-left'>
                            <p>Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.</p>
                        </div>
                        <div className='row-span-1 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start'>
                            <button className='btn border-0 rounded-2xl px-4 py-3 text-[14px] font-semibold bg-gradient-to-r from-orange-500 to-pink-500'>Explore Technologies</button>
                            <button className='btn text-[14px] font-normal border border-[#e5e7ebFF] bg-white rounded-2xl px-4 py-3'>Learn More</button>
                        </div>
                    </div>
                    
                </div>
                <div className='col-span-1 md:col-span-5 items-center'>
                    <div className='w-3/4 sm:w-1/2 md:w-full h-auto md:h-[326px] mx-auto rounded-[24px]'>
                        <img src={bannerStack} className='w-full h-full object-contain md:-mt-3' alt="banner-stack.png" />
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Banner;