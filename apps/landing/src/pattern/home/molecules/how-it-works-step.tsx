import { FC } from 'react'
import { cn, Hidden, ToggleGroupItem } from '@chainkeeping/ui'

interface IProps {
  number: string,
  title: string,
  description: string,
  value: string;
  toggleGroupValue: string;
}

const HowItWorksStep: FC<IProps> = ({ description, number, title, value, toggleGroupValue }) => {
  return (
    <ToggleGroupItem value={value} aria-label={title} size="custom" className='h-full focus-visible:bg-transparent hover:bg-transparent data-[state=on]:bg-transparent transition-all duration-200 ease-in-out'>
      <div className='w-full h-full flex items-start gap-6 md:gap-8'>
        <div className='w-11 h-full'>
          <div className={cn(toggleGroupValue === value ? "bg-destructive text-destructive-foreground transition-colors duration-200 ease-in-out" : "bg-muted text-muted-foreground transition-colors duration-200 ease-in-out", 'w-11 h-11 flex items-center justify-center my-2 rounded-full')}>{number}</div>
          
          <hr className={cn(toggleGroupValue === value ? 'h-[120px]' : 'h-[13px]', value === "download" ? "h-0" : "", 'bg-border ml-[22px] w-[1px] transition-all duration-200 ease-in-out')} />
        </div>

        <div className='w-full max-w-[271px] md:max-w-fit md:min-w-[363px] md:w-fit flex flex-col items-start gap-y-[18px] mt-[13px]'>
          {/* Title */}
          <h4 className={cn(toggleGroupValue === value ? 'text-foreground' : 'text-muted-foreground', 'text-left text-xl md:text-2xl whitespace-pre-wrap md:whitespace-nowrap font-dmsans font-bold transition-colors duration-200 ease-in-out')}>{title}</h4>

          {/* Description */}
          <Hidden isVisible={toggleGroupValue === value} >
            <p className='max-w-[271px] md:max-w-fit text-left text-sm md:text-base text-gray-600 font-dmsans transition-colors duration-200 ease-in-out'>{description}</p>
          </Hidden>
        </div>
      </div>
    </ToggleGroupItem>
  )
}

export default HowItWorksStep