import { FC, ReactElement } from 'react'
import { cn, Hidden, ToggleGroupItem } from '@chainkeeping/ui'

interface IProps {
    icon: ReactElement,
    title: string,
    description: string,
    value: string;
    toggleGroupValue: string;
}

const FeaturesStep: FC<IProps> = ({ description, icon, title, value, toggleGroupValue }) => {
    return (
        <ToggleGroupItem value={value} aria-label={title} size="custom" className={cn(toggleGroupValue === value ? 'min-h-[96px] w-full min-w-[300px] lg:w-[414px] rounded-[12px]' : 'h-full', 'focus-visible:bg-transparent hover:bg-transparent data-[state=on]:bg-transparent transition-all duration-200 ease-in-out')}>
            <div className='w-full min-w-[300px] lg:w-[414px] h-full flex flex-col items-start gap-y-2'>
                {/* Title */}
                <Hidden isVisible={toggleGroupValue !== value ? true : false} >
                    <h4 className='text-gray-400 text-left text-xl lg:text-2xl whitespace-pre-wrap lg:whitespace-nowrap font-dmsans font-bold transition-colors duration-200 ease-in-out'>{title}</h4>
                </Hidden>

                {/* Description */}
                <Hidden isVisible={toggleGroupValue === value} >
                    <div className='bg-gray-700 w-full h-[96px] flex items-start gap-[9px] p-3 rounded-[12px]'>
                        <div>
                            <span className='inline-block mt-[6px]'>{icon}</span>
                        </div>
                        <div className='w-full flex flex-col gap-y-2'>
                            <h4 className='h-fit w-full text-white text-left text-sm lg:text-lg whitespace-pre-wrap lg:whitespace-nowrap font-dmsans font-bold transition-colors duration-200 ease-in-out'>{title}</h4>
                            <p className='text-left text-sm text-gray-100 font-dmsans transition-colors duration-200 ease-in-out'>{description}</p>
                        </div>
                    </div>
                </Hidden>
            </div>
        </ToggleGroupItem>
    )
}

export default FeaturesStep