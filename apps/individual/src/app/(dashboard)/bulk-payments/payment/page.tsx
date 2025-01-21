"use client";
import PaymentSection from "@/pattern/transaction/templates/payment-section";

const Payment = () => {
	return (
		<div className='w-full min-h-screen h-fit flex flex-col gap-y-[144px] mb-[144px]'>
			<PaymentSection />
		</div>
	);
};

export default Payment;
