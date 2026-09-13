import bannerStack from '../assets/banner-stack-2.png'

const Banner = () => {
    return (
        <div className='pt-[96px] max-w-6xl mx-auto h-[420px]'>
            <div className='grid grid-cols-12 gap-8 px-8'>
                <div className='col-span-7 grid grid-rows-1 items-center'>
                    <div className='grid grid-rows-8  h-[326px] pr-8'>
                        <div className='pb-6 row-span-4'>
                            <h1 className='font-semibold text-6xl'>Build Your Ideal <br />Development Stack</h1>
                        </div>
                        <div className='row-span-3 pr-1.27 pb-10 text-lg font-normal'>
                            <p>Explore frontend, backend, database, and tooling options,compare them side by side, and put together the stack that fits your next project.</p>
                        </div>
                        <div className='row-span-1 flex gap-6'>
                            <button className='btn border-0 rounded-2xl px-4 py-3 text-[14px] font-semibold bg-gradient-to-r from-orange-500 to-pink-500'>Explore Technologies</button>
                            <button className='btn text-[14px] font-normal border border-[#e5e7ebFF] bg-white rounded-2xl px-4 py-3'>Learn More</button>
                        </div>
                    </div>
                    
                </div>
                <div className='col-span-5 items-center'>
                    <div className='h-[326px] mx-auto rounded-[24px]'>
                        <img src={bannerStack} className='-mt-3' alt="banner-stack.png" />
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
};

export default Banner;