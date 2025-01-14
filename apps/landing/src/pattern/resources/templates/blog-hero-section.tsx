import React from 'react';

const BlogHeroSection = () => {
    return (
        <section className="bg-primary bg-pattern-bg-img bg-cover bg-center w-full h-fit lg:min-h-[243px]">
            <div className="w-full h-full flex flex-col items-center justify-start gap-y-8 pt-[69px] pb-[47px] px-[18px] lg:container">
                <div className="w-full max-w-[760px] flex flex-col gap-y-8">
                    <div className="w-full flex flex-col gap-y-3">
                        <h3 className="font-rubik font-bold text-4xl leading-[37.97px] lg:text-[2.75rem] text-white text-left lg:text-center">Blog</h3>
                        <p className="max-w-[339px] lg:max-w-[734px] text-white text-base text-left lg:text-center font-dmsans leading-[22px]">
                            Articles on cryptocurrency taxation, accounting, industry regulations etc.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogHeroSection;
