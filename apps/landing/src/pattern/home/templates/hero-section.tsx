import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import HeroImage from "@/public/images/hero-img.png";
import BulletListIcon from "../atoms/bullet-list-icon";
import { list } from "./join-us-widget";
import { Button } from "@chainkeeping/ui";
import ArrowRightBtnIcon from "../atoms/arrow-right-btn-icon";
import { APP_ROUTES } from "@/lib/routes";

const HeroSection = () => {
	const { push } = useRouter();
	return (
		<div className='min-h-[941px] h-fit lg:min-h-[563px] lg:h-[563px] flex flex-col justify-between gap-y-6 lg:gap-y-0 lg:flex-row lg:items-start lg:justify-between pt-8 lg:pt-[88px] px-[18px] lg:container'>
			<div className='max-w-[546px] h-full max-h-[506px] flex flex-col gap-y-6'>
				<div className='w-full flex flex-col gap-y-3'>
					<h2 className='w-full text-4xl lg:text-[2.75rem] leading-[42.66px] lg:leading-[52.14px] font-rubik font-bold'>
						Taxation & accounting for crypto made simple and easy.
					</h2>
					<p className='text-foreground text-base font-dmsans'>
						Track and record crypto-transactions, determine gains or losses
						related to cryptocurrencies within a predetermined time frame,
						compute the your tax liabilities while maximizing your tax
						efficiency.
					</p>
				</div>

				{/* List */}
				<div className='w-full flex flex-col items-start gap-4'>
					{list?.map((item, idx) => (
						<div
							key={idx}
							className='w-full flex justify-start items-center gap-3'
						>
							<BulletListIcon />
							<p className='text-label text-base font-rubik font-normal'>
								{item}
							</p>
						</div>
					))}
				</div>

				{/* CTA */}
				<div className='w-fit flex flex-col lg:flex-row lg:items-center lg:gap-x-6 gap-y-6'>
					<Button
						variant='secondary'
						size='lg'
						onClick={() => push(APP_ROUTES.contact)}
					>
						Compute my taxes{" "}
						<span className='inline-flex ml-2'>
							<ArrowRightBtnIcon />
						</span>
					</Button>

					<Button variant='link' className='underline text-foreground'>
						See sample reports
					</Button>
				</div>
			</div>
			<div className="relative w-full h-[283.17px] lg:h-[463.65px] lg:w-[600px]">
				<Image
					src={HeroImage} alt='hero image'
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					style={{
						objectFit: 'cover',
					}}
					priority
				/>
			</div>
		</div>
	);
};

export default HeroSection;
