
const MainLayout = () => {
    return (
        <div className=" mt-10 md:mt-28 max-w-6xl mx-auto">
            <div className="px-8">
                <h1 className="text-base md:text-4xl font-extrabold">
                    <span className="text-[#0F172A]">Explore the </span>
                    <span className="bg-[linear-gradient(to_bottom,_rgba(236,72,153,1)_0%,_rgba(139,92,246,1)_100%)] bg-clip-text text-transparent">Technologies</span>
                </h1>
                <p className="text-base font-normal text-[#64748B]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
        </div>
    );
};

export default MainLayout;