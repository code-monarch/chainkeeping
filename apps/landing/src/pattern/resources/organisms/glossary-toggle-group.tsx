import { cn, ToggleGroup, ToggleGroupItem } from '@chainkeeping/ui'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { setGlossaryValue } from '@/redux/slices/glossary.slice'


const Glossary = [
    {
        name: "All",
        value: "all",
    },
    {
        name: "Crypto terms",
        value: "crypto-terms",
    },
    {
        name: "Tax terms",
        value: "tax-terms",
    },
    // {
    //     name: "e-Commerce",
    //     value: "e-commerce",
    // }
]

const GlossaryToggleGroup = () => {
    const dispatch: AppDispatch = useDispatch();
    const currentValue = useSelector((state: RootState) => state.glossary.glossary);

    return (
        <>
            <ToggleGroup type="single" orientation='vertical' value={currentValue}
                onValueChange={(newValue) => {
                    if (newValue) {
                        dispatch(setGlossaryValue(newValue as "all" |
                            "crypto-terms" |
                            "tax-terms" |
                            "e-commerce"
                            | ""));
                    }
                }}
                className='w-full lg:max-w-[760px] h-full flex items-center justify-start gap-1 flex-wrap'>
                {Glossary?.map(({ name, value }, idx) => (
                    <div key={idx} className='w-fit flex items-center'>
                        <ToggleGroupItem name={name} value={value} aria-label={name} size="custom" variant="outline" className={cn('bg-transparent min-w-fit max-w-[142px] min-h-[38px] flex items-center justify-center text-white text-base whitespace-nowrap gap-3 py-2 px-4 border-0 rounded-[8px] hover:bg-transparent hover:border hover:border-secondary focus-visible:bg-secondary data-[state=on]:bg-secondary data-[state=on]:text-secondary-foreground data-[state=on]:border-secondary transition-all duration-200 ease-in-out')}>
                            {name}
                        </ToggleGroupItem>
                    </div>
                ))}
            </ToggleGroup>
        </>
    )
}

export default GlossaryToggleGroup