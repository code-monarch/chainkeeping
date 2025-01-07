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
		<div className='h-[563px] md:container flex items-center justify-between pt-[88px]'>
			<div className='max-w-[546px] h-full max-h-[506px] flex flex-col gap-y-6'>
				<div className='w-full flex flex-col gap-y-3'>
					<h2 className='w-full text-[2.75rem] leading-[52.14px] font-rubik font-bold'>
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
				<div className='w-fit flex items-center gap-2'>
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
			<div className='w-full h-[506.19px] flex justify-end'>
				<Image src={HeroImage} alt='hero image' height={463.65} width={600} />
			</div>
		</div>
	);
};

export default HeroSection;
