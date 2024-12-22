import { ToggleGroup } from '@chainkeeping/ui'
import HowItWorksStep from '../molecules/how-it-works-step'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { setToggleGroupValue } from '@/redux/slices/how-it-works.slice'

const howItWorks = [
    {
        number: "01",
        value: "import",
        title: "Import Transactions",
        description: "Connect to your crypto exchanges or wallets via API or CSV uploads. Chainkeeping will automatically and securely import your transactions data."
    },
    {
        number: "02",
        value: "review",
        title: "Review Transactions",
        description: "Chainkeeping automatically classifies your transactions accordingly, you may need to resolve unclassified transactions or add additional data such as expenses incurred."
    },
    {
        number: "03",
        value: "download",
        title: "Get insights & download report",
        description: "Head on to the reports tab to see your generated tax reports, get your report signed by an accounting practitioner, file your taxes and download your report. "
    }
]

const HowItWorksWidget = () => {
    const dispatch: AppDispatch = useDispatch();
    const toggleGroupValue = useSelector((state: RootState) => state.howItWorks.toggleGroupValue);
    return (
        <div className='max-w-[439px] max-h-[306px] h-fit flex flex-col items-start'>
            <ToggleGroup type="single" orientation='vertical' value={toggleGroupValue}
                onValueChange={(newValue) => {
                    if (newValue) {
                        dispatch(setToggleGroupValue(newValue));
                    }
                }}
                className='h-full flex flex-col items-start gap-y-2'>
                {howItWorks?.map(({ value, description, number, title }, idx) => (
                    <HowItWorksStep key={idx} description={description} number={number} title={title} value={value} toggleGroupValue={toggleGroupValue} />
                ))}
            </ToggleGroup>
        </div>
    )
}

export default HowItWorksWidget