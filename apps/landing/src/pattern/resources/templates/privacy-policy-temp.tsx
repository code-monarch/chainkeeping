import React from 'react'
import PrivacyPolicyNavigation from '../organisms/privacy-policy-navigation'
import LastUpdatedWidget from '../molecules/last-updated-widget'

const LAST_UPDATE = "July 10, 2023"

const dataCollection = [
    {
        title: "Customers",
        info: "who are individuals, corporate bodies, groups, associations, registered under the requisite law, who subscribe to the use of the tax software that calculates crypto taxes as provided under the Chainkeeping platform to enable easy tax reporting on series of transactions in multiple wallets."
    },
    {
        title: "Third party",
        info: "are users who may be individuals or corporate bodies who subscribe to use the platform solely through customers or by any other means not featured under this definition."
    },
]

const infoYouProvide = [
    {
        title: "User Profile",
        info: "We receive information when you create or update your Chainkeeping account. This may include your name, email, phone number, login name and password, address, crypto wallets (including related payment verification information), government-issued means of ID, birth date, photo, and signature. This also includes the preferences and settings that you enable for your Chainkeeping account."
    },
    {
        title: "Background Check Information",
        info: "We may collect background check information if you sign up to use Chainkeeping services as a service provider. This may include information such as your previous tax payments and other information which may in any way affect the crypto tax report or calculation."
    },
    {
        title: "User content",
        info: "We may collect information that you submit when you contact Chainkeeping customer support, provide ratings or compliments for other users, or otherwise reach Chainkeeping."
    },
]

const infoCreated = [
    {
        title: "Transaction Information",
        info: "We collect transaction details related to your use of our services, including the type of services you requested, crypto wallets and transactions."
    },
    {
        title: "Usage information",
        info: "We collect information about how you interact with our services. This includes information such as access dates and times, app features or pages viewed, app crashes and other system activity, type of browser, and third-party sites or service you were using before interacting with our services. In some cases, we collect this information through cookies, and similar technologies that create and maintain unique identifiers. "
    },
    {
        title: "Device Information",
        info: "We may obtain information about the devices you use to access our services, including the hardware models, device IP address, operating systems and versions, software, file names, and versions, preferred languages, unique device identifiers, advertising identifiers, serial numbers, device motion information, and mobile network information."
    },
    {
        title: "Communications Data",
        info: "Chainkeeping may also use this information for customer support services (including to resolve disputes between users), for safety and security purposes, to improve our products and services and for analytics."
    },
]

const infoFromOtherSources = [
    "User feedback, such as ratings or compliments.",
    "Users requesting services for or on your behalf.",
]

const howWeUseYourInfo = [
    "To enhance the safety and security of our users and services.",
    "For customer support.",
    "For research and development.",
    "To enable communications to or between users.",
    "In connection with legal proceedings",
]
const cookies = [
    "Authenticating users",
    "Remembering user preferences and settings",
    "Determining the popularity of content",
    "Analyzing site traffic and trends, and generally understanding the online behaviors and interests of people who interact with our services.",
]

const infoWeCollect = [
    "Information that you provide to Chainkeeping, such as when you signup on the Chainkeeping website to create an account.",
    "Information created when you use our services, such as phonenumber, tax identification number, National Identification Number, etc. for individuals. For corporate bodies or tax professionals, the requisite information will include, Director's details, RC number/practicing licence (as applicable), Email etc.",
    "Information from other sources, such as Chainkeeping partners and third parties that use Chainkeeping related platforms."
]

const PrivacyPolicyTemp = () => {
    return (
        <div className='relative w-full h-fit lg:min-h-[500px]'>
            <div className='w-full flex items-start justify-between gap-16 px-[18px] lg:container'>
                {/* Left */}
                <div className='hidden lg:block sticky top-[88px] right-0 w-[221px] min-h-[203px] h-full'>
                    <h6 className='w-full font-rubik font-medium text-base text-foreground pb-3'>Contents</h6>
                    <PrivacyPolicyNavigation />
                </div>
                {/* Right */}
                <div className='w-full lg:max-w-[984px] space-y-[32px]'>
                    <div className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-[2rem] lg:text-[2.8rem] font-rubik font-semibold'>Privacy policy</h3>
                        <LastUpdatedWidget lastUpdate={LAST_UPDATE} />
                    </div>
                    <div id="intro" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>1. Introduction</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>Thanks for entrusting Chainkeeping with your information. This is a serious responsibility, and we want you to understand how we are handling your private information<br /><br />
                            This policy explains the information we collect when you use Chainkeeping's website, mobile applications and services, how it is used and shared, and your choices regarding this information.<br /><br />
                            The moment you proceed to use any of the services on our website or mobile application, then you consent to the collection and use of your personal information in relation to this policy. The data we collect are used for providing and improving our service. We will not share your information with anybody except in accordance with the terms of and for the purposes set forth in our privacy policy.</p>
                    </div>
                    <div id="data-collection" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>2. Data collection and uses</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>This policy applies to users of Chainkeeping's services anywhere in the world, including users of Chainkeeping's apps, websites, features or other services.<br /><br />
                            This policy specifically applies to “Users” who may be characterized as follows:
                        </p>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            {
                                dataCollection?.map(({ info, title }, idx) => (
                                    <li key={idx} className='font-normal' ><span className='font-bold'>{title}: </span>{info}</li>
                                ))
                            }
                        </ul>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            This policy also applies to those who provide information to Chainkeeping in connection with an application to use our services, or whose information Chainkeeping otherwise receives in connection with its services. All those subject to this policy are referred to as “users” for purposes of this policy.<br /><br />
                            The practices described in this policy are subject to applicable laws in the places in which we operate. This means that we only engage in the methods described in this policy in a particular country or region if permitted under the laws of those places. Please contact us if you have questions about our practices in your country or region.
                        </p>
                    </div>

                    <div id="information-we-collect" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>3. Information we collect</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            Chainkeeping collects:
                        </p>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            {
                                infoWeCollect?.map((item, idx) => (
                                    <li key={idx} className='font-normal' >{item}</li>
                                ))
                            }
                        </ul>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            The following information is collected by or on behalf of Chainkeeping:
                        </p>

                        {/* Information you provide */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>i. Information you provide</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                This may include:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                {
                                    infoYouProvide?.map(({ info, title }, idx) => (
                                        <li key={idx} className='font-normal' ><span className='font-bold'>{title}: </span>{info}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* Information created when you use our services */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>ii. Information created when you use our services</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                This may include:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                {
                                    infoCreated?.map(({ info, title }, idx) => (
                                        <li key={idx} className='font-normal' ><span className='font-bold'>{title}: </span>{info}</li>
                                    ))
                                }
                            </ul>
                        </div>

                        {/* Information from other sources */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>iii. Information from other sources</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                This may include:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                {
                                    infoFromOtherSources?.map((item, idx) => (
                                        <li key={idx} className='font-normal' >{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        {/* How we use your information */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>iv. How we use your information</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                This may include:
                            </p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Chainkeeping collects and uses information to enable fast, reliable and simplified means of crypto tax payments despite a single user having thousands of transactions on multiple wallets. We also use the information we collect:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                {
                                    howWeUseYourInfo?.map((item, idx) => (
                                        <li key={idx} className='font-normal' >{item}</li>
                                    ))
                                }
                            </ul>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Chainkeeping does not sell or share your personal information to third parties for third-party direct marketing purposes.
                            </p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Chainkeeping uses the information it collects for purposes including:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                <li className='font-normal' >Providing services and features</li>
                            </ul>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Chainkeeping uses the information we collect to provide, personalize, maintain and improve our products and services.
                            </p>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                This includes using the information to:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                <li className='font-normal' >Create and update your account.</li>
                                <li className='font-normal' >Verify your identity.</li>
                                <li className='font-normal' >Enable accuracy in crypto tax report and calculation. </li>
                            </ul>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems, to conduct data analysis, testing, and research, and to monitor and analyze usage and activity trends.
                            </p>
                        </div>
                        {/* Safety And Security */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>v. Safety And Security</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                We use your data to help maintain the safety, security, and integrity of our services and users. This includes, for example:<br /><br />
                                Screening customers before enabling their use of our services and at subsequent intervals, including thorough reviews of background checks where permitted by law, to prevent the use of our services by unsafe and fraudulent service providers.<br /><br />
                                We also use information from customers' devices to detect false information and misrepresentation of facts by the service providers and to raise awareness among service providers regarding such behaviors.<br /><br />
                                We also use the device, location, profile, usage and other information to prevent, detect and combat fraud or unsafe activities. This includes processing of such information, in certain countries, to identify practices or patterns that indicate fraud or risk of safety incidents. This may also include information from third parties.
                            </p>
                        </div>
                        {/* Customer Support */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>vi. Customer Support</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Chainkeeping uses the information we collect (including recordings of customer support calls after notifying you and with your consent) to assist you when you contact our customer support services, including to:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                <li className='font-normal'>Direct your questions to the appropriate customer support person</li>
                                <li className='font-normal'>Investigate and address your concerns</li>
                                <li className='font-normal'>Monitor and improve our customer support responses</li>
                            </ul>
                        </div>
                        {/* Research And Development */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>vii. Research And Development</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                We may use the information we collect for testing, research, analysis and product development. This allows us to improve and enhance the safety and security of our services, develop new features and products, and facilitate required solutions in connection with our services.
                            </p>
                        </div>

                        {/* Communications from CloudGo */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>viii. Communications from CloudGo</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                CloudGo may use the information we collect to communicate with you about products, services, promotions, studies, surveys, news, updates and events.<br /> <br />
                                CloudGo may also use the information to inform you about elections, ballots, referenda and other political and policy processes that relate to our services.
                            </p>
                        </div>
                        {/* Legal Proceedings And Requirements */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>ix. Legal Proceedings And Requirements</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                We may use the information we collect to investigate or address claims or disputes relating to your use of CloudGo's services, or as otherwise allowed by applicable law, or as requested by regulators, government entities, and official inquiries.
                            </p>
                        </div>
                    </div>

                    <div id="cookies" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>4. Cookies And Third Party Technologies</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            CloudGo and its partners use cookies and other identification technologies on our apps, websites, emails, and online ads for purposes described in this policy.
                        </p>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            Cookies are small text files that are stored on your browser or device by websites, apps, online media, and advertisements. CloudGo uses cookies and similar technologies for purposes such as:
                        </p>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            {
                                cookies?.map((item, idx) => (
                                    <li key={idx} className='font-normal' >{item}</li>
                                ))
                            }
                        </ul>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            We may also allow others to provide audience measurement and analytics services for us, to serve advertisements on our behalf across the Internet, and to track and report on the performance of those advertisements. These entities may use cookies, web beacons, SDKs, and other technologies to identify your device when you visit our site and use our services, as well as when you visit other online sites and services.
                        </p>
                    </div>

                    <div id="information-retention" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>6. Information Retention And Deletion</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            Chainkeeping requires user profile information to provide its services and retains requires user profile information to provide its services for as long as you maintain your Chainkeeping account.<br /><br />
                            Users may request deletion of their accounts at any time. Following such request, Chainkeeping deletes the information that it is not required to retain and restricts access to or use of any information it finds necessary to retain.<br /><br />
                            Chainkeeping may be unable to cancel your accounts, such as if there is an outstanding credit on your account or an unresolved claim or dispute. Upon resolution of the issue preventing deletion, Chainkeeping will delete your account as described above.<br /><br />
                            You may request deletion of your account at any time through the Privacy Settings in the Chainkeeping mobile application, or via Chainkeeping's website.<br /><br />
                            Chainkeeping may also retain specific information if necessary for its legitimate business interests, such as fraud prevention and enhancing users' safety and security. For example, if Chainkeeping shuts down a user's account because of unsafe behavior or security incidents, Chainkeeping may retain specific information about that account to prevent that user from opening a new Chainkeeping account in the future.
                        </p>
                    </div>

                    <div id="choice-and-transparency" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>7. Choice And Transparency</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            Chainkeeping provides means for you to see and control the information that Chainkeeping collects, including through:
                        </p>
                        <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                            <li className='font-normal' >in-app privacy settings</li>
                            <li className='font-normal' >device permissions</li>
                            <li className='font-normal' >in-app rating pages</li>
                            <li className='font-normal' >marketing opt-outs</li>
                        </ul>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            You may also request that Chainkeeping provide you with explanation, copies or correction of your data.
                        </p>
                        {/* i. Privacy Settings */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>i. Privacy Settings</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                The Privacy Settings menu in the …
                            </p>
                        </div>
                        {/* ii. Device Permissions */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>ii. Device Permissions</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                Most mobile platforms (iOS, Android, and other products) have defined certain types of device data that apps cannot access without your consent. Moreover, these platforms have different permission systems for obtaining your consent. The iOS platform will alert you the first time the Chainkeeping app wants permission to access certain types of data and will let you consent (or not consent) to that request. Android devices will notify you of the permissions that the Chainkeeping seeks before you first use the app, and your use of the app constitutes your consent.
                            </p>
                        </div>

                        {/* iii. Explanations, Copies, And Correction */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>iii. Explanations, Copies, And Correction</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                You may request that Chainkeeping:
                            </p>
                            <ul className='list-disc text-gray-600 leading-[26px] font-dmsans font-normal pl-6'>
                                <li className='font-normal' >Please provide a detailed report regarding the information Chainkeeping has collected about you and how it uses that information.</li>
                                <li className='font-normal' >Receive a copy of the information Chainkeeping has collected about you.</li>
                                <li className='font-normal' >Request correction of any inaccurate information that Chainkeeping has about you.</li>
                                <li className='font-normal' >You can make these requests by contacting Chainkeeping here.</li>
                                <li className='font-normal' >You can also edit the name, phone number and email address associated with your account through the Settings menu in Chainkeeping's apps. You can also transaction history in the Chainkeeping apps.</li>
                            </ul>
                        </div>

                        {/* iv. Marketing Opt-Outs */}
                        <div className='w-full flex flex-col gap-y-4'>
                            <h3 className='text-xl lg:text-2xl text-foreground font-rubik font-semibold'>iv. Marketing Opt-Outs</h3>
                            <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                                You may opt out of receiving promotional emails from Chainkeeping here. You may also opt out of receiving emails and other messages from Chainkeeping by following the instructions in those messages.
                            </p>
                        </div>
                    </div>
                    <div id="updates-to-the-policy" className='w-full flex flex-col gap-y-4'>
                        <h3 className='text-2xl lg:text-[2rem] text-foreground font-rubik font-semibold'>8 Updates to this policy</h3>
                        <p className='text-base text-gray-600 leading-[26px] font-dmsans font-normal'>
                            We may occasionally update this policy. If we make significant changes, we will notify you of the changes through the Chainkeeping apps or other means, such as email. To the extent permitted under applicable law, by using our services after such notice, you consent to our updates to this policy.<br /><br />
                            We encourage you to periodically review this policy for the latest information on our privacy practices. We will also make prior versions of our privacy policies available for review.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicyTemp