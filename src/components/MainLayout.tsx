const MainLayout = () => {
    return (
        <div className="mt-10 md:mt-28 max-w-6xl mx-auto">
            <div className="px-8 text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-extrabold">
                    <span className="text-[#0F172A]">Explore the </span>
                    <span className="text-brand-gradient">Technologies</span>
                </h1>
                <p className="text-xs md:text-base font-normal text-[#64748B] mt-1">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
        </div>
    );
};

export default MainLayout;