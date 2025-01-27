"use client";
import AccountTransactionSection from "@/pattern/accounts/templates/account-section";

const Account = () => {
    return (
        <div className='w-full min-h-fit h-full flex flex-col justify-start'>
            <AccountTransactionSection />
        </div>
    );
};

export default Account;
