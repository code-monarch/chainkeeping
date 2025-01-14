import React from 'react'
import LastUpdatedWidget from '../molecules/last-updated-widget'

const LAST_UPDATE = "July 10, 2023"

const linkToOtherWebsites = [
    "provide account information services to access information about your account on your behalf;",
    "confirm whether an amount necessary for the execution of a card-based payment transaction is available on your account; or",
    "provide payment initiation services to initiate payments from your account on your behalf."
]

const TermsOfUseTemp = () => {
    return (
        <div className='w-full lg:max-w-[984px] space-y-[32px] px-[18px]'>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-[2rem] lg:text-[2.8rem] font-rubik font-semibold'>Terms of Service</h3>
                <LastUpdatedWidget lastUpdate={LAST_UPDATE} />
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>These terms and conditions outline the rules and regulations concerning access to and use of Chainkeeping website or mobile application related, linked or otherwise connected thereto.<br /><br />
                    You agree that by accessing this website, you have read, understood and agreed to be bound by all these terms and conditions. <strong>IF YOU DO NOT AGREE TO TAKE ALL OF THE TERMS AND CONDITIONS STATED ON THIS PAGE, YOU MUST DISCONTINUE USE IMMEDIATELY.</strong><br /><br />
                    For the purpose of these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'><strong>Privacy policy;</strong> Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Description of Service</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Chainkeeping is a Crypto Tax generating software that enables its users track their tax portfolio, generate crypto tax report despite having multiple crypto wallets as a result of its access to multiple blockchains and also ensuring tax optimization of its users to avoid overpaying crypto tax. It allows individuals, companies as well as Tax professionals to use its service.</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>User Account and Security</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>You will need your personal information to access some or all of our Services. If you permit others to use your account credentials, you are responsible for the activities of such users that occurs in connection to your account.</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Cookies</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>We employ the use of cookies. By accessing Chainkeeping you agreed to use cookies in agreement with our Privacy Policy.<br /><br />
                    Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Intellectual property License</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>All materials displayed on the website, including information, graphic materials, logos and trademarks are solely our property and may be protected by copyright, trademark and intellectual property laws. You agree not to reproduce, retransmit, distribute, sell, publish, broadcast, circulate any such materials. All intellectual property rights are reserved. You are granted limited license only subject to the restrictions provided for in this terms and conditions, for the purpose of your operations and activities on this website.</p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Link to other Websites</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Our site contains link to other websites and online resources that are not owned by Chainkeeping.<br /><br />
                    Chainkeeping has no control over these sites and therefore cannot assume responsibility for the contents and general practices of these third-party websites. Hence, we strongly advise you read the terms and conditions and Privacy Policy of these third-party websites.<br /><br />
                    You acknowledge that if you grant permission for a third party to take actions on your behalf, we may disclose certain information about your chats account to this third party. You may permit third party service providers licensed by applicable law to:<br /><br />
                </p>
                <ol className="roman-list list-none space-y-2 text-gray-600 leading-[26px] font-dmsans font-normal pl-6">
                    {linkToOtherWebsites?.map((item, idx) => (
                        <li key={idx} className="relative before:content-[counter(list-counter)'.'] before:absolute before:left-0 before:font-normal pl-6 font-dmsans font-normal text-base">
                            {item}
                        </li>
                    ))}
                </ol>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Limitation of Liability</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>In no event shall chats, nor any of its officers, directors and employees, be liable to you for anything arising out of or in any way connected with your use of this website, whether such liability is under contract, tort or otherwise and chats, including its officers, directors and employees shall not be liable for any indirect, consequential or special liability arising out of or in any way related to your use of this website.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Indemnification</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>You hereby indemnify to the fullest extent Chainkeeping from and against any and all liabilities, costs, demands, causes of action, damages and expenses (including reasonable attorneys fee) arising out of or in any way related to your breach of any of the provisions of these terms.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Severability</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>If any provisions of these terms are found to be unenforceable or invalid under any applicable law. Such unenforceability or invalidity shall not render these terms unenforceable or invalid as a whole, and such provisions shall be deleted without affecting the remaining provisions herein
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Variation of terms</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Chainkeeping reserves the right to modify these terms and Conditions at any time. We do so by posting and drawing attention to the updated Terms on the website or mobile application. Your decision to continue with usage of our services upon update of the Terms and Conditions constitutes your formal acceptance of the new Terms and Conditions.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Assignment</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Chainkeeping Shall be permitted to assign, transfer, and subcontract its rights and/or obligations under these terms without any notification or consent required. However, you shall not be permitted to assign, transfer, or subcontractor any of your rights and/or obligations under these terms.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Content Liability</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>While we take responsibility for maintaining and updating this website, you acknowledge that the website may include errors. The website is subject to change at our sole discretion without notice to you, and may not be up to date or accurate at the time you access it.<br /><br />
                    It is your responsibility to enquire directly with us to ensure the adequacy of the information you seek to rely upon. We disclaim liability for loss for loss directly or indirectly arising from use of or reliance on the website content. By using this website, you agree to so at your sole risk.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Conditions of use</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>By using this website, you certify that you have read and reviewed this Agreement and that you agree to comply with its terms. If you do not want to be bound by the terms of this Agreement, you are advised to leave the website accordingly. Chainkeeping only grants use and access of this website, its products, and its services to those who have accepted its terms.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Closing Your Chainkeeping Account</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>You may close your account and terminate your relationship with us at any time without cost or penalty and we may also terminate or suspend access to our Service without prior notice or liability for any reason whatsoever, including breach of terms. However, all terms which by their nature should survive termination shall survive termination including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.<br /><br />
                    Certain cases, you may not close your Chainkeeping account, includes if you have a pending transaction or an open dispute or claim.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Age restriction</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>You must be at least 18 (eighteen) years of age before you can use this website. By using this website, you warrant that you are at least 18 years of age and you may legally adhere to this Agreement. Chainkeeping assumes no responsibility for liabilities related to age misrepresentation.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Breaches of these terms and conditions</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Any account that is in breach of this terms and condition will be suspended and a possible fine levied in accordance with the weight of such breach.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Governing law</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>By visiting this website, you agree that the laws of the Federal Republic of Nigeria, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between Chainkeeping and you, or its business partners and associates.
                </p>
            </div>
            <div className='w-full flex flex-col gap-y-4'>
                <h3 className='text-2xl font-rubik font-semibold'>Disputes</h3>
                <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Any dispute related in any way to your visit to this website or to products/services you purchase/subscribe from us shall be arbitrated by state or federal court of Nigeria, an arbitration Panel and you consent to exclusive jurisdiction and venue of such courts.
                </p>
            </div>
        </div>
    )
}

export default TermsOfUseTemp