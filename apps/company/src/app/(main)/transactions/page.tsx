"use client";
import TransactionSection from "@/pattern/transaction/templates/transaction-section";

const Transactions = () => {
  return (
    <div className='w-full min-h-full h-fit flex flex-col gap-y-[144px] mb-[144px]'>
      <TransactionSection />
    </div>
  );
};

export default Transactions;
